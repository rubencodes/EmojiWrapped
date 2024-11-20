import type { Emoji, Stat } from "./entity-types";

export enum CacheKey {
	Emoji = "emojiCache2",
	Stats = "statsCache2",
	StartTime = "startTime2",
	EndTime = "endTime2",
}

export type CacheTypeMap = {
	[CacheKey.Emoji]: Emoji[];
	[CacheKey.Stats]: Stat[];
	[CacheKey.StartTime]: number;
	[CacheKey.EndTime]: number;
};
