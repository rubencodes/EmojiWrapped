import {
	html,
	render,
	useState,
	useMemo,
	useEffect,
	useCallback,
	// @ts-ignore
} from "https://unpkg.com/htm/preact/standalone.module.js";

type $FIXME = any;

declare global {
	interface Window {
		TS: TSWindowData | undefined;
	}
}

type JSONObject = { [key: string]: JSONRepresentable };

type JSONRepresentable =
	| JSONObject
	| JSONRepresentable[]
	| string
	| number
	| boolean
	| null
	| undefined;

type TSWindowData = {
	boot_data:
		| {
				api_token: string;
				enterprise_api_token: string;
				team_id: string;
				enterprise_id: string;
		  }
		| undefined;
	model:
		| {
				team:
					| {
							domain: string;
					  }
					| undefined;
		  }
		| undefined;
	members:
		| {
				fetchAndUpsertMembersWithQuery: (params: {
					query: string;
				}) => Promise<APIResponseTypeMap[APIEndpoint.Profile]> | undefined;
		  }
		| undefined;
};

interface Profile extends JSONObject {
	name: string;
	profile: {
		image_original: string;
	};
}

interface Emoji extends JSONObject {
	name: string;
	url: string;
	created: number;
	alias_for: string;
}

interface Message extends JSONObject {
	user: string;
	username: string;
}

interface Item extends JSONObject {
	messages: Message[];
}

interface Stat extends JSONObject {
	name: string;
	url: string;
	createdAt: number;
	items: Item[];
	count: number;
}

interface User extends JSONObject {
	username: string;
	emoji: string[];
}

enum CacheKey {
	Emoji = "emojiCache",
	Stats = "statsCache",
	StartTime = "startTime",
	EndTime = "endTime",
}

type CacheTypeMap = {
	[CacheKey.Emoji]: Emoji[];
	[CacheKey.Stats]: Stat[];
	[CacheKey.StartTime]: number;
	[CacheKey.EndTime]: number;
};

enum APIEndpoint {
	EmojiList = "emoji.adminList",
	EmojiUsage = "search.modules.messages",
	Profile = "__profile_placeholder__",
}

type APIResponseTypeMap = {
	[APIEndpoint.EmojiList]: {
		emoji: Emoji[];
		paging: {
			pages: number;
		};
		error: string;
	};
	[APIEndpoint.EmojiUsage]: {
		items: Item[];
		pagination: {
			total_count: number;
			pages: number;
		};
		error: string;
	};
	[APIEndpoint.Profile]: {
		objects: Profile[];
		error: string;
	};
};

// API class to fetch data from Slack.
class API {
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

// IndexedDB wrapper to store and retrieve data.
class AsyncStorage {
	#dbName: string;
	#storeName: string;
	#dbPromise: Promise<IDBDatabase>;

	constructor(dbName = "AsyncStorageDB", storeName = "AsyncStorageStore") {
		this.#dbName = dbName;
		this.#storeName = storeName;
		this.#dbPromise = this.#initDB() as Promise<IDBDatabase>;
	}

	async #initDB() {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.#dbName, 1);

			request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
				const db = (event?.target as $FIXME)?.result as IDBDatabase;
				if (!db.objectStoreNames.contains(this.#storeName)) {
					db.createObjectStore(this.#storeName);
				}
			};

			request.onsuccess = (event: Event) =>
				resolve((event?.target as $FIXME)?.result);
			request.onerror = (event: Event) =>
				reject((event?.target as $FIXME)?.error);
		});
	}

	async #withStore(
		type: IDBTransactionMode,
		callback:
			| ((store: IDBObjectStore) => IDBRequest<IDBValidKey>)
			| ((store: IDBObjectStore) => IDBRequest<undefined>)
	) {
		const db = await this.#dbPromise;
		return new Promise((resolve, reject) => {
			const transaction = db.transaction(this.#storeName, type);
			const store = transaction.objectStore(this.#storeName);
			const request = callback(store);

			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error);
		});
	}

	async set<Key extends CacheKey>(key: Key, value: CacheTypeMap[CacheKey]) {
		return this.#withStore("readwrite", (store: IDBObjectStore) =>
			store.put(value, key)
		);
	}

	async get<Key extends CacheKey>(
		key: Key
	): Promise<CacheTypeMap[Key] | undefined> {
		return this.#withStore("readonly", (store: IDBObjectStore) =>
			store.get(key)
		) as Promise<CacheTypeMap[Key] | undefined>;
	}

	async remove(key: CacheKey) {
		return this.#withStore("readwrite", (store: IDBObjectStore) =>
			store.delete(key)
		);
	}

	async clear() {
		return this.#withStore("readwrite", (store: IDBObjectStore) =>
			store.clear()
		);
	}
}

// Cache class to store and retrieve data.
class Cache {
	static #Storage = new AsyncStorage();

	static get startTime(): Promise<number | undefined> {
		return this.#Storage.get(CacheKey.StartTime);
	}

	static set startTime(value: number) {
		this.#Storage.set(CacheKey.StartTime, value);
	}

	static get endTime(): Promise<number | undefined> {
		return this.#Storage.get(CacheKey.EndTime);
	}

	static set endTime(value: number) {
		this.#Storage.set(CacheKey.EndTime, value);
	}

	static get emojiCache(): Promise<Emoji[] | undefined> {
		return this.#Storage.get(CacheKey.Emoji);
	}

	static set emojiCache(value: Emoji[]) {
		this.#Storage.set(CacheKey.Emoji, value);
	}

	static get statsCache(): Promise<Stat[] | undefined> {
		return this.#Storage.get(CacheKey.Stats);
	}

	static set statsCache(value: Stat[]) {
		this.#Storage.set(CacheKey.Stats, value);
	}
}

// App states.
enum State {
	Initial = "initial",
	Empty = "empty",
	LoadingEmoji = "loading-emoji",
	LoadingStats = "loading-stats",
	Loaded = "loaded",
	Error = "error",
}

// Button types.
enum ButtonType {
	Primary = "primary",
	Outline = "outline",
}

// Button sizes.
enum ButtonSize {
	Small = "small",
	Medium = "medium",
	Large = "large",
}

// Formats the time difference between two timestamps.
function formatTimeDifference(startTime: number, endTime: number) {
	const diff = endTime - startTime;
	const seconds = Math.floor(diff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);

	return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
}

// Downloads a JSON file.
function downloadJSON(data: JSONRepresentable, filename: string) {
	// Creating a blob object from non-blob data using the Blob constructor
	const blob = new Blob([JSON.stringify(data, null, "\t")], {
		type: "application/json",
	});
	const url = URL.createObjectURL(blob);
	// Create a new anchor element
	const a = document.createElement("a");
	a.href = url;
	a.download = filename || "download";
	a.click();
	a.remove();
}

// Shuffles the given array, returning a new array.
function shuffle<T>(array: T[]): T[] {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
	return array;
}

// Custom hook to use state with caching.
function useCachedState<
	Key extends CacheKey,
	DefaultValue extends CacheTypeMap[Key] | undefined
>(
	keyPath: Key,
	defaultValue?: DefaultValue,
	onLoadFromCache?: (value: CacheTypeMap[Key] | undefined) => void
): [CacheTypeMap[Key] | DefaultValue, (value: CacheTypeMap[Key]) => void] {
	const [state, setState] = useState(defaultValue);
	useEffect(() => {
		(async () => {
			const cachedState = (await Cache[keyPath]) as
				| CacheTypeMap[Key]
				| undefined;
			if (cachedState) {
				setState(cachedState);
			}

			if (onLoadFromCache) {
				onLoadFromCache(cachedState);
			}
		})();
	}, []);

	const setCachedState = useCallback((value: CacheTypeMap[Key]) => {
		(Cache[keyPath] as CacheTypeMap[Key]) = value;
		setState(value);
	}, []);

	return [state, setCachedState];
}

function useEmoji() {
	const [percentLoaded, setPercentLoaded] = useState(0) as [
		number,
		(value: number) => void
	];
	const [state, setState] = useState<State>(State.Initial) as [
		State,
		(value: State) => void
	];
	const [emojis, setEmojis] = useCachedState(CacheKey.Emoji, []);
	const [stats, setStats] = useCachedState(CacheKey.Stats, [], (value) => {
		setState(value ? State.Loaded : State.Empty);
	});
	const [startTime, setStartTime] = useCachedState(
		CacheKey.StartTime,
		undefined
	);
	const [endTime, setEndTime] = useCachedState(CacheKey.EndTime, undefined);
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
	const loadEmoji = useCallback(
		async (forced?: boolean) => {
			// Get ready to load the emoji...
			setPercentLoaded(0);
			setStartTime(Date.now());
			setState(State.LoadingEmoji);

			// Fetch the emoji list, reading from the cache if possible.
			const updatedEmojis =
				!forced && emojis
					? emojis
					: await API.fetchEmojiList({ setPercentLoaded });
			if (forced || !emojis) setEmojis(updatedEmojis);
			setPercentLoaded(1);
			const nonAliasedEmoji = updatedEmojis.filter(
				({ alias_for }) => !alias_for
			);

			// Fetch the emoji stats, reading from the cache if possible.
			const updatedStats = !forced && stats ? stats : [];
			try {
				if (updatedStats.length === 0) {
					setState(State.LoadingStats);
					setPercentLoaded(0);
					for (const emoji of nonAliasedEmoji) {
						const index = nonAliasedEmoji.findIndex((e) => e === emoji);
						const { count, items } = await API.fetchEmojiUsage({
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

	return {
		emojis,
		stats,
		users,
		state,
		percentLoaded,
		startTime,
		endTime,
		loadEmoji,
	};
}

const Button = ({
	type = ButtonType.Primary,
	size = ButtonSize.Medium,
	className,
	children,
	onClick,
	disabled,
}: {
	type?: ButtonType;
	size?: ButtonSize;
	className?: string;
	children: ReturnType<typeof html>;
	onClick: () => void;
	disabled?: boolean;
}) => {
	return html`
		<button
			className="c-button c-button--${type} c-button--${size} ${disabled
				? "c-button--disabled"
				: ""} ${className}"
			onClick=${onClick}
			disabled=${disabled}
		>
			${children}
		</button>
	`;
};

const Emoji = ({ name, url, count }: Stat) => {
	return html`
		<div className="emoji">
			<span className="emoji-name">:${name}:</span>
			<img className="emoji-img" src=${url} />
			<span className="emoji-footer">
				<span className="emoji-count">${count}</span>
				<br />
				${count === 1 ? "time" : "times"}
			</span>
		</div>
	`;
};

const Emojis = ({ emojis }: { emojis: Stat[] }) => {
	return html`
		<div className="emojis">
			<div className="emojis-scroll-wrapper">
				${emojis.map(
					(emoji) => html`<${Emoji} key=${emoji.name} ...${emoji} />`
				)}
			</div>
		</div>
	`;
};

const User = ({ username, emoji }: User) => {
	const [url, setUrl] = useState("") as [string, (value: string) => void];
	useEffect(() => {
		const fetchProfile = async () => {
			const user = await API.fetchProfile({ username });
			setUrl(user?.profile?.image_original ?? "");
		};
		fetchProfile();
	}, []);

	return html`
		<div className="user">
			<div className="user-img-wrapper">
				${url && html`<img className="user-img" src=${url} />`}
				${!url && html`<${Loader} />`}
			</div>
			<span className="user-footer">
				<span className="user-count">${emoji.length}</span>
				<br />
				${emoji.length === 1 ? "reaction" : "reactions"}
			</span>
		</div>
	`;
};

const Users = ({ users }: { users: User[] }) => {
	return html`
		<div className="users">
			${users.map((user) => html`<${User} key=${user.username} ...${user} />`)}
		</div>
	`;
};

const Loader = ({ size = "medium" }) => {
	return html`
		<div class="infinite_spinner infinite_spinner_${size}">
			<svg class="infinite_spinner_spinner " viewBox="0 0 100 100">
				<circle class="infinite_spinner_bg" cx="50%" cy="50%" r="35"></circle>
				<circle
					class="infinite_spinner_path infinite_spinner_blue"
					cx="50%"
					cy="50%"
					r="35"
				></circle></svg
			><svg
				class="infinite_spinner_spinner infinite_spinner_tail "
				viewBox="0 0 100 100"
			>
				<circle
					class="infinite_spinner_path infinite_spinner_blue"
					cx="50%"
					cy="50%"
					r="35"
				></circle>
			</svg>
		</div>
	`;
};

const ProgressBar = ({
	title,
	percent,
}: {
	title: string;
	percent: number;
}) => {
	return html`
		<div className="progress">
			<progress className="progress-bar" value=${percent * 100} max="100">
				${percent * 100}
			</progress>
			<span className="progress-title">${title}</span>
		</div>
	`;
};

const LoadedState = ({
	emojis,
	stats,
	users,
	startTime,
	endTime,
	regenerateReport,
}: {
	emojis: Emoji[];
	stats: Stat[];
	users: User[];
	startTime: number;
	endTime: number;
	regenerateReport: () => void;
}) => {
	const rarestCount = stats.slice(-1)[0]?.count ?? 1;
	const rarestEmoji = shuffle(
		stats.filter(({ count }) => {
			return count === rarestCount;
		})
	);
	const topUsers = users.slice(0, 3);
	const topUsersEmoji = topUsers.flatMap(({ emoji }) => emoji);
	const topUserEmojis = Object.values(
		topUsersEmoji.reduce((acc, emojiName) => {
			if (!acc[emojiName]) {
				acc[emojiName] = {
					name: emojiName,
					url: stats.find(({ name }) => name === emojiName)?.url ?? "",
					createdAt:
						stats.find(({ name }) => name === emojiName)?.createdAt ?? 0,
					items: [],
					count: topUsersEmoji.filter((e) => e === emojiName).length ?? 0,
				};
			}

			return acc;
		}, {} as Record<string, Stat>)
	).sort((a, b) => b.count - a.count);
	const emojiThisYear = stats.filter(({ createdAt = 0 }) => {
		return new Date(createdAt).getFullYear() === new Date().getFullYear();
	});
	const onRegenerate = () => {
		if (
			confirm(
				"Are you sure you want to regenerate your Emoji Wrapped report? You'll lose your previous report, and it may take a while to pull fresh data."
			) === false
		) {
			return;
		}

		regenerateReport();
	};

	return html`
		<div className="app-loaded-state">
			<h5 className="app-subtitle">This year, you used...</h5>
			<span className="app-emoji-count">
				<h1>${stats.length}</h1>
				<i>different Slack emoji!</i>
			</span>
			<h5 className="app-subtitle">
				Some of your ⭐️⭐️⭐️⭐️⭐️ favorites were...
			</h5>
			<${Emojis} emojis=${stats.slice(0, 100)} />
			<h5 className="app-subtitle">Your most rarely used emoji 🔎</h5>
			<${Emojis} emojis=${rarestEmoji} />
			<h5 className="app-subtitle">The people you most often reacted to 👯</h5>
			<${Users} users=${topUsers} />
			<h5 className="app-subtitle">Your 🔝 reactions to them were...</h5>
			<${Emojis} emojis=${topUserEmojis} />
			<h5 className="app-subtitle">These new emoji caught your 👀</h5>
			<${Emojis} emojis=${emojiThisYear.slice(0, 5)} />
			<div className="app-footer">
				<p className="app-footer-text">
					Elapsed time: ${formatTimeDifference(startTime, endTime)}
				</p>
				<div className="app-buttons">
					<${Button} onClick=${onRegenerate}> Regenerate <//>
					<${Button}
						type=${ButtonType.Outline}
						onClick=${() =>
							downloadJSON(
								{ emojis, stats, startTime, endTime },
								"emoji-wrapped.json"
							)}
					>
						Export JSON
					<//>
				</div>
			</div>
		</div>
	`;
};

const EmptyState = ({
	state,
	percentLoaded,
	loadEmoji,
}: {
	state: State;
	percentLoaded: number;
	loadEmoji: (forced?: boolean) => void;
}) => {
	const isLoading =
		state === State.LoadingEmoji || state === State.LoadingStats;
	return html`
		<div className="app-empty-state">
			<p className="app-description">View a report of your top used emoji.</p>
			<${Button}
				className="app-button"
				onClick=${() => loadEmoji()}
				disabled=${isLoading}
			>
				${isLoading ? "Loading" : "Generate"}
				${isLoading && html`<${Loader} size="small" />`}
			<//>
			<p className="app-footer">
				${isLoading &&
				html`<${ProgressBar}
					title=${state === State.LoadingEmoji
						? "(1/2) Loading emoji..."
						: "(2/2) Loading stats..."}
					percent=${percentLoaded}
				/>`}
				<i> This may take a while for workspaces with many emoji. </i>
			</p>
		</div>
	`;
};

const ErrorState = () => {
	return html`
		<div className="app-error-state">
			<p className="app-error">Failed to load emoji stats 🥺</p>
		</div>
	`;
};

const App = () => {
	const {
		emojis,
		stats,
		users,
		state,
		percentLoaded,
		startTime,
		endTime,
		loadEmoji,
	} = useEmoji();
	return html`
		<div className="app">
			<h2 className="app-title">Emoji Wrapped ✨</h2>
			${state === State.Initial && html`<${Loader} />`}
			${[State.Empty, State.LoadingStats, State.LoadingEmoji].includes(state) &&
			html`<${EmptyState}
				state=${state}
				percentLoaded=${percentLoaded}
				loadEmoji=${loadEmoji}
			/>`}
			${state === State.Error && html`<${ErrorState} />`}
			${state === State.Loaded &&
			html`<${LoadedState}
				emojis=${emojis}
				stats=${stats}
				users=${users}
				startTime=${startTime}
				endTime=${endTime}
				regenerateReport=${() => loadEmoji(true)}
			/>`}
		</div>
	`;
};

(() => {
	const root = document.createElement("div");
	render(html`<${App} />`, root);

	const anchorElement = document.getElementById("list_emoji_section");
	if (!anchorElement) return;
	anchorElement.insertBefore(root, anchorElement.firstChild);
})();
