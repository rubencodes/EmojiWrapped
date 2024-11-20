import { Emoji, Item, Profile } from "../types/entity-types";
import { APIEndpoint, APIResponseTypeMap } from "../types/api-types";

// API class to fetch data from Slack.
export class API {
	// Recursively fetches the list of emoji from the Slack API.
	static async fetchEmojiList({
		pageSize = 1000,
		page = 1,
		attempt = 0,
		setPercentLoaded,
	}: {
		pageSize?: number;
		page?: number;
		attempt?: number;
		setPercentLoaded: (value: number) => void;
	}): Promise<Emoji[]> {
		try {
			const {
				emoji,
				paging: { pages = 1 } = {},
				error,
			} = (await this.#post(APIEndpoint.EmojiList, {
				body: this.#createFormData({
					token: this.#getApiToken() ?? "",
					page,
					count: pageSize,
				}),
			})) ?? {
				emoji: [],
				paging: { pages: 0 },
				error: "No response",
			};
			if (error) {
				throw new Error(error);
			}

			setPercentLoaded(page / pages);
			if (page === pages) {
				return emoji;
			}

			return emoji.concat(
				await this.fetchEmojiList({
					setPercentLoaded,
					pageSize,
					page: page + 1,
				})
			);
		} catch (error) {
			console.error("EW: Failed to fetch emoji list", error);
			if (attempt < 3) {
				await this.#sleep(5000 * (attempt + 1));
				return this.fetchEmojiList({
					setPercentLoaded,
					pageSize,
					page,
					attempt: attempt + 1,
				});
			}

			return [];
		}
	}

	// Recursively fetches the usage stats for a given emoji from the Slack API.
	static async fetchEmojiUsage({
		emoji,
		attempt = 0,
	}: {
		emoji: string;
		attempt?: number;
	}): Promise<{ items: Item[]; count: number }> {
		const yearToDateFormatted = `${new Date().getFullYear()}-01-01`;
		try {
			const {
				items,
				pagination: { total_count, pages } = {},
				error,
			} = (await this.#post(APIEndpoint.EmojiUsage, {
				body: this.#createFormData({
					token: this.#getApiToken() ?? "",
					query: `hasmy::${emoji}: after:${yearToDateFormatted}`,
					module: "messages",
					page: 1,
					count: 1000,
					no_user_profile: 1,
					extra_message_data: 1,
					extracts: 1,
					max_extract_len: 200,
					highlight: 1,
					query_refinement_suggestions_version: 1,
					facets_result_count: 5,
					search_only_team: "",
					search_only_my_channels: false,
					search_exclude_bots: false,
					search_context: "desktop_messages_tab",
					include_files_shares: 1,
					query_rewrite_disabled: false,
					file_title_only: false,
					spell_correction: "FUZZY_MATCH",
					search_tab_filter: "messages",
					search_tab_sort: "timestamp",
					sort: "timestamp",
					sort_dir: "desc",
					max_filter_suggestions: 10,
				}),
			})) ?? {
				items: [],
				pagination: { total_count: 0, pages: 0 },
				error: "No response",
			};
			if (error) {
				throw new Error(error);
			}

			return {
				items,
				count: total_count ?? 0,
			};
		} catch (error) {
			console.error("EW: Failed to fetch stats", error);
			if (attempt < 3) {
				await this.#sleep(5000 * (attempt + 1));
				return this.fetchEmojiUsage({
					emoji,
					attempt: attempt + 1,
				});
			}

			return { items: [], count: 0 };
		}
	}

	// Fetches the profile of a given user from the Slack API.
	static async fetchProfile({
		username,
		attempt = 0,
	}): Promise<Profile | null> {
		try {
			const { objects, error } =
				(await window.TS?.members?.fetchAndUpsertMembersWithQuery({
					query: username,
				})) ?? {};
			if (error) {
				throw new Error(error);
			}

			return objects?.find((user) => user.name === username) ?? null;
		} catch (error) {
			console.error("EW: Failed to fetch profile", error);
			if (attempt < 10) {
				await this.#sleep(5000 * (attempt + 1));
				return this.fetchProfile({
					username,
					attempt: attempt + 1,
				});
			}

			return null;
		}
	}

	// Sleeps for the given timeout.
	static async #sleep(timeout: number) {
		return new Promise<void>((resolve) => {
			setTimeout(() => resolve(), timeout);
		});
	}

	// Gets the API token from the Slack boot data.
	static #getApiToken(): string | undefined {
		return window.TS?.boot_data?.api_token;
	}

	// Gets the enterprise token from the Slack boot data.
	static #getEnterpriseToken(): string | undefined {
		return window.TS?.boot_data?.enterprise_api_token;
	}

	// Gets the team ID from the Slack boot data.
	static #getTeamID(): string | undefined {
		return window.TS?.boot_data?.team_id;
	}

	// Gets the enterprise ID from the Slack boot data.
	static #getEnterpriseID(): string | undefined {
		return window.TS?.boot_data?.enterprise_id;
	}

	// Creates a form data object from the given parameters.
	static #createFormData(
		params: Record<string | number, number | string | boolean>
	) {
		const data = new FormData();
		Object.entries(params).forEach(([key, value]) => {
			data.append(key, `${value}`);
		});

		return data;
	}

	// Fetches data from the Slack API using the given endpoint and options.
	static async #post<Endpoint extends APIEndpoint>(
		endpoint: Endpoint,
		options: RequestInit | undefined
	): Promise<APIResponseTypeMap[Endpoint] | undefined> {
		const org = window.TS?.model?.team?.domain;
		return fetch(`https://${org}.slack.com/api/${endpoint}`, {
			...options,
			method: "POST",
		}).then((response) => response.json());
	}
}

export { APIEndpoint, APIResponseTypeMap };
