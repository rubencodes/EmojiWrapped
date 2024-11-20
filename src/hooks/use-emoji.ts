import { useCallback, useMemo, useState } from "preact/hooks";
import { useCachedState } from "./use-cached-state";
import { CacheKey } from "../utilities/Cache";
import { API } from "../utilities/API";
import { State } from "../types/app-state";
import type { Emoji, Stat } from "../types/entity-types";

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
			const nonAliasedEmoji = updatedEmojis.filter(
				({ alias_for }) => !alias_for
			);

			// Fetch the emoji stats, reading from the cache if possible.
			const updatedStats = !forced && stats && stats.length > 0 ? stats : [];
			try {
				if (updatedStats.length === 0) {
					setState(State.LoadingStats);
					setPercentLoaded(0);
					for (const emoji of nonAliasedEmoji) {
						const index = nonAliasedEmoji.findIndex((e) => e === emoji);
						const { count, items } = await API.fetchEmojiUsage({
							year,
							emoji: emoji.name,
						});

						setPercentLoaded((index + 1) / nonAliasedEmoji.length);
						if (count > 0) {
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

			try {
				const { year, emojis, stats, startTime, endTime } = JSON.parse(
					jsonData
				) as {
					year: number;
					emojis: Emoji[];
					stats: Stat[];
					startTime: number;
					endTime: number;
				};

				setYear(year);
				setEmojis(emojis);
				setStats(stats);
				setStartTime(startTime);
				setEndTime(endTime);
				setState(State.Loaded);
			} catch {
				console.error("EW: Failed to parse uploaded report");
				return;
			}
		};
		reader.readAsText(file);
	}, []);

	return {
		year,
		emojis,
		stats,
		users,
		state,
		percentLoaded,
		startTime,
		endTime,
		loadStats,
		importStats,
	};
}
