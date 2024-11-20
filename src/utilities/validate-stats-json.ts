import type { Emoji, Stat } from "../types/entity-types";

export function validateStatsJSON(jsonData: string): {
	year: number;
	emojis: Emoji[];
	stats: Stat[];
	startTime: number;
	endTime: number;
} | null {
	try {
		const { year, emojis, stats, startTime, endTime } = JSON.parse(
			jsonData
		) as {
			year?: number;
			emojis?: Emoji[];
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

		if (!Array.isArray(stats)) {
			throw new Error("Invalid stats data");
		}

		if (
			stats.some(
				({ name, url, createdAt, items, count }) =>
					typeof name !== "string" ||
					typeof url !== "string" ||
					typeof createdAt !== "number" ||
					!Array.isArray(items) ||
					items.some(
						({ messages }) =>
							!Array.isArray(messages) ||
							messages.some(
								({ user, username }) =>
									typeof user !== "string" || typeof username !== "string"
							)
					) ||
					typeof count !== "number"
			)
		) {
			throw new Error("Invalid stat data");
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
			stats,
			startTime,
			endTime,
		};
	} catch (error) {
		alert(`Invalid JSON data: ${error.message}`);
		return null;
	}
}
