import type { Emoji, SearchResult, Stat } from "../types/entity-types";

export function validateStatsJSON(jsonData: string): {
	year: number;
	emojis: Emoji[];
	searchResults: SearchResult[] | undefined;
	startTime: number;
	endTime: number;
} | null {
	try {
		let { year, emojis, searchResults, stats, startTime, endTime } = JSON.parse(
			jsonData
		) as {
			year?: number;
			emojis?: Emoji[];
			searchResults?: SearchResult[];
			stats?: Stat[];
			startTime?: number;
			endTime?: number;
		};

		if (typeof year !== "number") {
			throw new Error("Invalid year");
		}

		if (!Array.isArray(emojis)) {
			throw new Error("Invalid emojis data");
		}

		if (
			emojis.some(
				({ name, url, created, alias_for }) =>
					typeof name !== "string" ||
					typeof url !== "string" ||
					typeof created !== "number" ||
					typeof alias_for !== "string"
			)
		) {
			throw new Error("Invalid emoji data");
		}

		if (!Array.isArray(searchResults)) {
			if (!Array.isArray(stats)) {
				throw new Error("Invalid sarch results data");
			}

			if (
				stats.some(
					({ name, items, count }) =>
						typeof name !== "string" ||
						!Array.isArray(items) ||
						items.some(({ messages }) => !Array.isArray(messages)) ||
						typeof count !== "number"
				)
			) {
				throw new Error("Invalid legacy stat data");
			}

			searchResults = stats;
		}

		if (
			searchResults.some(
				({ name, items, count }) =>
					typeof name !== "string" ||
					!Array.isArray(items) ||
					items.some(({ messages }) => !Array.isArray(messages)) ||
					typeof count !== "number"
			)
		) {
			throw new Error("Invalid search result data");
		}

		if (typeof startTime !== "number") {
			throw new Error("Invalid start time");
		}

		if (typeof endTime !== "number") {
			throw new Error("Invalid end time");
		}

		return {
			year,
			emojis,
			searchResults,
			startTime,
			endTime,
		};
	} catch (error) {
		alert(`Invalid JSON data: ${error.message}`);
		return null;
	}
}
