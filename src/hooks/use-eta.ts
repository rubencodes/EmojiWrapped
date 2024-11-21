import { useCallback, useState, useEffect, useRef } from "preact/hooks";
import { formatSeconds } from "../utilities/format-seconds";
import { State } from "../types/app-state";

export function useETA({
	state,
	emojiCount,
	startTime,
	percentLoaded,
	defaultRate = 1,
}: {
	state: State;
	emojiCount: number;
	startTime: number;
	percentLoaded: number;
	defaultRate?: number;
}) {
	const [rate, setRate] = useState(defaultRate);
	const calculateETA = useCallback(
		(emojiRemaining: number): string | undefined => {
			if (state !== State.LoadingStats) return undefined;

			const eta = Math.round(emojiRemaining * rate);
			return formatSeconds(eta);
		},
		[rate, state]
	);

	// Adjust the rate as we load more data.
	const ref = useRef(new Set<number>());
	useEffect(() => {
		if (state !== State.LoadingStats) {
			return setRate(defaultRate);
		}

		const percent = Math.floor(percentLoaded * 100);
		if (percent === 0) {
			return setRate(defaultRate);
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
		const rate = secondsElapsed / (percentLoaded * emojiCount);
		setRate(
			(currentRate) =>
				(currentRate * (percent * 100) + rate) / (percent * 100 + 1)
		);
	}, [percentLoaded, startTime, state, emojiCount]);

	return calculateETA(emojiCount - percentLoaded * emojiCount);
}
