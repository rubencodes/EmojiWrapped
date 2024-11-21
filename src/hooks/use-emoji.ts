import {
	useCallback,
	useMemo,
	useState,
	useEffect,
	useRef,
} from "preact/hooks";
import { useCachedState } from "./use-cached-state";
import { useETA } from "./use-eta";
import { CacheKey } from "../utilities/Cache";
import { API } from "../utilities/API";
import { validateStatsJSON } from "../utilities/validate-stats-json";
import { State } from "../types/app-state";
import type { Emoji, SearchResult, Stat } from "../types/entity-types";

export function useEmoji() {
	// The current application state.
	const [state, setState] = useState<State>(State.Initial) as [
		State,
		(value: State) => void
	];

	// Cached data from the network.
	const [emojis, setEmojis] = useCachedState(CacheKey.Emoji, [] as Emoji[]);
	const [searchResults, setSearchResults] = useCachedState(
		CacheKey.SearchResults,
		[] as SearchResult[],
		(cachedData) => {
			setState(
				cachedData && cachedData.length > 0 ? State.Loaded : State.Empty
			);
		}
	);

	// Compile stats from search results when emojis and search results are loaded.
	const [stats, setStats] = useState([] as Stat[]);
	useEffect(() => {
		if (emojis.length === 0) return;
		if (searchResults.length === 0) return;

		// Compile stats
		const stats = searchResults
			.reduce((stats, { name, items, count }) => {
				if (count === 0) {
					return stats;
				}

				const emoji = emojis.find((e) => e.name === name);
				if (!emoji) {
					return stats;
				}

				// Find any pre-existing emoji matching the name or alias.
				const originalEmojiIndex = stats.findIndex(
					(e) =>
						(emoji.alias_for && e.name === emoji.alias_for) ||
						e.name === emoji.name
				);
				const originalEmoji =
					originalEmojiIndex >= 0 ? stats[originalEmojiIndex] : null;

				// If the alias emoji is found, update the original emoji.
				if (originalEmoji) {
					const updated = {
						...originalEmoji,
						createdAt: Math.min(
							originalEmoji.createdAt,
							(emoji.created ?? 0) * 1000
						),
						items: [...originalEmoji.items, ...items],
						count: originalEmoji.count + count,
					};
					return [
						...stats.slice(0, originalEmojiIndex),
						updated,
						...stats.slice(originalEmojiIndex + 1),
					];
				}

				// If the alias emoji wasn't found, add it to the list.
				if (emoji.alias_for) {
					const newEmoji = {
						name: emoji.alias_for,
						url: emoji.url,
						createdAt: (emoji.created ?? 0) * 1000,
						items,
						count,
					};
					return [...stats, newEmoji];
				}

				// Default case, just add the emoji stats to the list.
				const newEmoji = {
					name: emoji.name,
					url: emoji.url,
					createdAt: (emoji.created ?? 0) * 1000,
					items,
					count,
				};
				return [...stats, newEmoji];
			}, [] as Stat[])
			.sort((a, b) => b.count - a.count);
		setStats(stats);
		setState(State.Loaded);
	}, [emojis, searchResults]);
	const users: {
		username: string;
		emoji: string[];
	}[] = useMemo(() => {
		const map: Map<string, string[]> = new Map();

		stats.forEach(({ name, items = [] }) => {
			items.forEach(({ messages = [] }) => {
				messages.forEach(({ user, username }) => {
					const resultsSoFar = map.get(username) ?? [];
					map.set(username, [...resultsSoFar, name]);
				});
			});
		});

		return Array.from(map.entries())
			.map(([username, emoji]) => ({ username, emoji }))
			.sort((a, b) => b.emoji.length - a.emoji.length);
	}, [stats]);

	// Business logic for loading data from the network.
	const [startTime, setStartTime] = useCachedState(CacheKey.StartTime, 0);
	const [endTime, setEndTime] = useCachedState(CacheKey.EndTime, 0);
	const [percentLoaded, setPercentLoaded] = useState(0) as [
		number,
		(value: number) => void
	];
	const [year, setYear] = useState(new Date().getFullYear());
	const loadStats = useCallback(
		async (forced?: boolean) => {
			// Get ready to load the emoji...
			setPercentLoaded(0);
			setStartTime(Date.now());
			setState(State.LoadingEmoji);

			// Fetch the emoji list, reading from the cache if possible.
			const updatedEmojis =
				!forced && emojis && emojis.length > 0
					? emojis
					: await API.fetchEmojiList({ setPercentLoaded });
			if (forced || !emojis || !emojis.length) setEmojis(updatedEmojis);
			setPercentLoaded(1);

			// Fetch the emoji stats, reading from the cache if possible.
			const updatedSearchResults =
				!forced && searchResults && searchResults.length > 0
					? searchResults
					: [];
			try {
				if (updatedSearchResults.length === 0) {
					setState(State.LoadingStats);
					setPercentLoaded(0);
					for (const emoji of updatedEmojis) {
						const index = updatedEmojis.findIndex((e) => e === emoji);
						const { count, items } = await API.fetchEmojiUsage({
							year,
							emoji: emoji.name,
						});
						updatedSearchResults.push({ name: emoji.name, count, items });
						setPercentLoaded((index + 1) / updatedEmojis.length);
					}
				}
			} catch (error) {
				console.error("EW: Failed to load all search results", error);
				setState(State.Error);
			} finally {
				setPercentLoaded(1);
				setSearchResults(updatedSearchResults);
				setEndTime(Date.now());
			}
		},
		[emojis, searchResults]
	);

	// Import stats from a JSON file.
	const importStats = useCallback((event: InputEvent) => {
		const [file] = Array.from((event.target as HTMLInputElement).files);
		const reader = new FileReader();
		reader.onload = (e) => {
			const jsonData = e.target.result;
			if (typeof jsonData !== "string") {
				return;
			}

			const json = validateStatsJSON(jsonData);
			if (!json) return;

			setYear(json.year);
			setEmojis(json.emojis);
			setSearchResults(json.searchResults);
			setStartTime(json.startTime);
			setEndTime(json.endTime);
			setState(State.Loaded);
		};
		reader.readAsText(file);
	}, []);

	// Approximate the time remaining to load the data.
	const eta = useETA({
		state,
		emojiCount: emojis.length,
		startTime,
		percentLoaded,
	});

	return {
		year,
		emojis,
		searchResults,
		stats,
		users,
		state,
		percentLoaded,
		startTime,
		endTime,
		eta,
		loadStats,
		importStats,
	};
}
