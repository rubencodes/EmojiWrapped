import {
	useCallback,
	useMemo,
	useState,
	useEffect,
	useRef,
} from "preact/hooks";
import { useCachedState } from "./use-cached-state";
import { CacheKey } from "../utilities/Cache";
import { API } from "../utilities/API";
import { formatSeconds } from "../utilities/format-seconds";
import { validateStatsJSON } from "../utilities/validate-stats-json";
import { State } from "../types/app-state";
import type { Emoji, Stat } from "../types/entity-types";

function useETA(state: State, defaultValue: number) {
	const [rate, setRate] = useState(defaultValue);
	const calculateETA = useCallback(
		(emojiRemaining: number): string | undefined => {
			if (state !== State.LoadingStats) return undefined;

			const eta = Math.round(emojiRemaining * rate);
			return formatSeconds(eta);
		},
		[rate, state]
	);
	return [calculateETA, setRate] as const;
}

export function useEmoji() {
	const [year, setYear] = useState(new Date().getFullYear());
	const [percentLoaded, setPercentLoaded] = useState(0) as [
		number,
		(value: number) => void
	];
	const [state, setState] = useState<State>(State.Initial) as [
		State,
		(value: State) => void
	];
	const [calculateETA, setRate] = useETA(state, 1);
	const [emojis, setEmojis] = useCachedState(CacheKey.Emoji, [] as Emoji[]);
	const [stats, setStats] = useCachedState(
		CacheKey.Stats,
		[] as Stat[],
		(value) => {
			setState(value ? State.Loaded : State.Empty);
		}
	);
	const [startTime, setStartTime] = useCachedState(CacheKey.StartTime, 0);
	const [endTime, setEndTime] = useCachedState(CacheKey.EndTime, 0);
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
			if (forced || !emojis) setEmojis(updatedEmojis);
			setPercentLoaded(1);

			// Fetch the emoji stats, reading from the cache if possible.
			const updatedStats = !forced && stats && stats.length > 0 ? stats : [];
			try {
				if (updatedStats.length === 0) {
					setState(State.LoadingStats);
					setPercentLoaded(0);
					for (const emoji of updatedEmojis) {
						const index = updatedEmojis.findIndex((e) => e === emoji);
						const { count, items } = await API.fetchEmojiUsage({
							year,
							emoji: emoji.name,
						});

						setPercentLoaded((index + 1) / updatedEmojis.length);
						if (count > 0) {
							// If the emoji has an alias then we need to find the original emoji
							const originalEmojiIndex = updatedStats.findIndex(
								(e) => emoji.alias_for && e.name === emoji.alias_for
							);
							if (originalEmojiIndex >= 0) {
								updatedStats[originalEmojiIndex] = {
									...updatedStats[originalEmojiIndex],
									items: [...updatedStats[originalEmojiIndex].items, ...items],
									count: updatedStats[originalEmojiIndex].count + count,
								};
							}
							// Default case, just add the emoji stats to the list.
							else {
								updatedStats.push({
									name: emoji.name,
									url: emoji.url,
									createdAt: (emoji.created ?? 0) * 1000,
									items,
									count,
								});
							}
						}
					}
				}
			} catch (error) {
				console.error("EW: Failed to load all stats", error);
				setState(State.Error);
			} finally {
				setPercentLoaded(1);
				setStats(updatedStats.sort((a, b) => b.count - a.count));
				setEndTime(Date.now());
				if (state !== State.Error) setState(State.Loaded);
			}
		},
		[stats]
	);
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
			setStats(json.stats);
			setStartTime(json.startTime);
			setEndTime(json.endTime);
			setState(State.Loaded);
		};
		reader.readAsText(file);
	}, []);
	const eta = calculateETA(emojis.length - percentLoaded * emojis.length);
	const ref = useRef(new Set<number>());
	useEffect(() => {
		if (state !== State.LoadingStats) {
			return setRate(1);
		}

		const percent = Math.floor(percentLoaded * 100);
		if (percent === 0) {
			return setRate(1);
		}

		// Approximate running every 1% of the way through the loading process.
		// Due to the large numbers we won't ever hit a perfect 1% so we'll just
		// approximate the increment.
		const percentageSet = ref.current;
		if (percentageSet.has(percent)) {
			return;
		} else {
			percentageSet.add(percent);
		}

		const now = Date.now();
		const secondsElapsed = (now - startTime) / 1000;
		const rate = secondsElapsed / (percentLoaded * emojis.length);
		setRate(
			(currentRate) =>
				(currentRate * (percent * 100) + rate) / (percent * 100 + 1)
		);
	}, [percentLoaded, startTime, state]);

	return {
		year,
		emojis,
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
