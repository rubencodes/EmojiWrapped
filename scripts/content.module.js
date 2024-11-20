var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _API_sleep, _API_getApiToken, _API_getEnterpriseToken, _API_getTeamID, _API_getEnterpriseID, _API_createFormData, _API_post, _AsyncStorage_instances, _AsyncStorage_dbName, _AsyncStorage_storeName, _AsyncStorage_dbPromise, _AsyncStorage_initDB, _AsyncStorage_withStore, _b, _Cache_Storage;
import { html, render, useState, useMemo, useEffect, useCallback,
// @ts-ignore
 } from "https://unpkg.com/htm/preact/standalone.module.js";
var CacheKey;
(function (CacheKey) {
    CacheKey["Emoji"] = "emojiCache";
    CacheKey["Stats"] = "statsCache";
    CacheKey["StartTime"] = "startTime";
    CacheKey["EndTime"] = "endTime";
})(CacheKey || (CacheKey = {}));
var APIEndpoint;
(function (APIEndpoint) {
    APIEndpoint["EmojiList"] = "emoji.adminList";
    APIEndpoint["EmojiUsage"] = "search.modules.messages";
    APIEndpoint["Profile"] = "__profile_placeholder__";
})(APIEndpoint || (APIEndpoint = {}));
// API class to fetch data from Slack.
class API {
    // Recursively fetches the list of emoji from the Slack API.
    static fetchEmojiList(_c) {
        return __awaiter(this, arguments, void 0, function* ({ pageSize = 1000, page = 1, attempt = 0, setPercentLoaded, }) {
            var _d, _e;
            try {
                const { emoji, paging: { pages = 1 } = {}, error, } = (_e = (yield __classPrivateFieldGet(this, _a, "m", _API_post).call(this, APIEndpoint.EmojiList, {
                    body: __classPrivateFieldGet(this, _a, "m", _API_createFormData).call(this, {
                        token: (_d = __classPrivateFieldGet(this, _a, "m", _API_getApiToken).call(this)) !== null && _d !== void 0 ? _d : "",
                        page,
                        count: pageSize,
                    }),
                }))) !== null && _e !== void 0 ? _e : {
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
                return emoji.concat(yield this.fetchEmojiList({
                    setPercentLoaded,
                    pageSize,
                    page: page + 1,
                }));
            }
            catch (error) {
                console.error("EW: Failed to fetch emoji list", error);
                if (attempt < 3) {
                    yield __classPrivateFieldGet(this, _a, "m", _API_sleep).call(this, 5000 * (attempt + 1));
                    return this.fetchEmojiList({
                        setPercentLoaded,
                        pageSize,
                        page,
                        attempt: attempt + 1,
                    });
                }
                return [];
            }
        });
    }
    // Recursively fetches the usage stats for a given emoji from the Slack API.
    static fetchEmojiUsage(_c) {
        return __awaiter(this, arguments, void 0, function* ({ emoji, attempt = 0, }) {
            var _d, _e;
            const yearToDateFormatted = `${new Date().getFullYear()}-01-01`;
            try {
                const { items, pagination: { total_count, pages } = {}, error, } = (_e = (yield __classPrivateFieldGet(this, _a, "m", _API_post).call(this, APIEndpoint.EmojiUsage, {
                    body: __classPrivateFieldGet(this, _a, "m", _API_createFormData).call(this, {
                        token: (_d = __classPrivateFieldGet(this, _a, "m", _API_getApiToken).call(this)) !== null && _d !== void 0 ? _d : "",
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
                }))) !== null && _e !== void 0 ? _e : {
                    items: [],
                    pagination: { total_count: 0, pages: 0 },
                    error: "No response",
                };
                if (error) {
                    throw new Error(error);
                }
                return {
                    items,
                    count: total_count !== null && total_count !== void 0 ? total_count : 0,
                };
            }
            catch (error) {
                console.error("EW: Failed to fetch stats", error);
                if (attempt < 3) {
                    yield __classPrivateFieldGet(this, _a, "m", _API_sleep).call(this, 5000 * (attempt + 1));
                    return this.fetchEmojiUsage({
                        emoji,
                        attempt: attempt + 1,
                    });
                }
                return { items: [], count: 0 };
            }
        });
    }
    // Fetches the profile of a given user from the Slack API.
    static fetchProfile(_c) {
        return __awaiter(this, arguments, void 0, function* ({ username, attempt = 0, }) {
            var _d, _e, _f, _g;
            try {
                const { objects, error } = (_f = (yield ((_e = (_d = window.TS) === null || _d === void 0 ? void 0 : _d.members) === null || _e === void 0 ? void 0 : _e.fetchAndUpsertMembersWithQuery({
                    query: username,
                })))) !== null && _f !== void 0 ? _f : {};
                if (error) {
                    throw new Error(error);
                }
                return (_g = objects === null || objects === void 0 ? void 0 : objects.find((user) => user.name === username)) !== null && _g !== void 0 ? _g : null;
            }
            catch (error) {
                console.error("EW: Failed to fetch profile", error);
                if (attempt < 10) {
                    yield __classPrivateFieldGet(this, _a, "m", _API_sleep).call(this, 5000 * (attempt + 1));
                    return this.fetchProfile({
                        username,
                        attempt: attempt + 1,
                    });
                }
                return null;
            }
        });
    }
}
_a = API, _API_sleep = function _API_sleep(timeout) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), timeout);
        });
    });
}, _API_getApiToken = function _API_getApiToken() {
    var _c, _d;
    return (_d = (_c = window.TS) === null || _c === void 0 ? void 0 : _c.boot_data) === null || _d === void 0 ? void 0 : _d.api_token;
}, _API_getEnterpriseToken = function _API_getEnterpriseToken() {
    var _c, _d;
    return (_d = (_c = window.TS) === null || _c === void 0 ? void 0 : _c.boot_data) === null || _d === void 0 ? void 0 : _d.enterprise_api_token;
}, _API_getTeamID = function _API_getTeamID() {
    var _c, _d;
    return (_d = (_c = window.TS) === null || _c === void 0 ? void 0 : _c.boot_data) === null || _d === void 0 ? void 0 : _d.team_id;
}, _API_getEnterpriseID = function _API_getEnterpriseID() {
    var _c, _d;
    return (_d = (_c = window.TS) === null || _c === void 0 ? void 0 : _c.boot_data) === null || _d === void 0 ? void 0 : _d.enterprise_id;
}, _API_createFormData = function _API_createFormData(params) {
    const data = new FormData();
    Object.entries(params).forEach(([key, value]) => {
        data.append(key, `${value}`);
    });
    return data;
}, _API_post = function _API_post(endpoint, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _c, _d, _e;
        const org = (_e = (_d = (_c = window.TS) === null || _c === void 0 ? void 0 : _c.model) === null || _d === void 0 ? void 0 : _d.team) === null || _e === void 0 ? void 0 : _e.domain;
        return fetch(`https://${org}.slack.com/api/${endpoint}`, Object.assign(Object.assign({}, options), { method: "POST" })).then((response) => response.json());
    });
};
// IndexedDB wrapper to store and retrieve data.
class AsyncStorage {
    constructor(dbName = "AsyncStorageDB", storeName = "AsyncStorageStore") {
        _AsyncStorage_instances.add(this);
        _AsyncStorage_dbName.set(this, void 0);
        _AsyncStorage_storeName.set(this, void 0);
        _AsyncStorage_dbPromise.set(this, void 0);
        __classPrivateFieldSet(this, _AsyncStorage_dbName, dbName, "f");
        __classPrivateFieldSet(this, _AsyncStorage_storeName, storeName, "f");
        __classPrivateFieldSet(this, _AsyncStorage_dbPromise, __classPrivateFieldGet(this, _AsyncStorage_instances, "m", _AsyncStorage_initDB).call(this), "f");
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _AsyncStorage_instances, "m", _AsyncStorage_withStore).call(this, "readwrite", (store) => store.put(value, key));
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _AsyncStorage_instances, "m", _AsyncStorage_withStore).call(this, "readonly", (store) => store.get(key));
        });
    }
    remove(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _AsyncStorage_instances, "m", _AsyncStorage_withStore).call(this, "readwrite", (store) => store.delete(key));
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _AsyncStorage_instances, "m", _AsyncStorage_withStore).call(this, "readwrite", (store) => store.clear());
        });
    }
}
_AsyncStorage_dbName = new WeakMap(), _AsyncStorage_storeName = new WeakMap(), _AsyncStorage_dbPromise = new WeakMap(), _AsyncStorage_instances = new WeakSet(), _AsyncStorage_initDB = function _AsyncStorage_initDB() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(__classPrivateFieldGet(this, _AsyncStorage_dbName, "f"), 1);
            request.onupgradeneeded = (event) => {
                var _c;
                const db = (_c = event === null || event === void 0 ? void 0 : event.target) === null || _c === void 0 ? void 0 : _c.result;
                if (!db.objectStoreNames.contains(__classPrivateFieldGet(this, _AsyncStorage_storeName, "f"))) {
                    db.createObjectStore(__classPrivateFieldGet(this, _AsyncStorage_storeName, "f"));
                }
            };
            request.onsuccess = (event) => { var _c; return resolve((_c = event === null || event === void 0 ? void 0 : event.target) === null || _c === void 0 ? void 0 : _c.result); };
            request.onerror = (event) => { var _c; return reject((_c = event === null || event === void 0 ? void 0 : event.target) === null || _c === void 0 ? void 0 : _c.error); };
        });
    });
}, _AsyncStorage_withStore = function _AsyncStorage_withStore(type, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield __classPrivateFieldGet(this, _AsyncStorage_dbPromise, "f");
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(__classPrivateFieldGet(this, _AsyncStorage_storeName, "f"), type);
            const store = transaction.objectStore(__classPrivateFieldGet(this, _AsyncStorage_storeName, "f"));
            const request = callback(store);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    });
};
// Cache class to store and retrieve data.
class Cache {
    static get startTime() {
        return __classPrivateFieldGet(this, _b, "f", _Cache_Storage).get(CacheKey.StartTime);
    }
    static set startTime(value) {
        __classPrivateFieldGet(this, _b, "f", _Cache_Storage).set(CacheKey.StartTime, value);
    }
    static get endTime() {
        return __classPrivateFieldGet(this, _b, "f", _Cache_Storage).get(CacheKey.EndTime);
    }
    static set endTime(value) {
        __classPrivateFieldGet(this, _b, "f", _Cache_Storage).set(CacheKey.EndTime, value);
    }
    static get emojiCache() {
        return __classPrivateFieldGet(this, _b, "f", _Cache_Storage).get(CacheKey.Emoji);
    }
    static set emojiCache(value) {
        __classPrivateFieldGet(this, _b, "f", _Cache_Storage).set(CacheKey.Emoji, value);
    }
    static get statsCache() {
        return __classPrivateFieldGet(this, _b, "f", _Cache_Storage).get(CacheKey.Stats);
    }
    static set statsCache(value) {
        __classPrivateFieldGet(this, _b, "f", _Cache_Storage).set(CacheKey.Stats, value);
    }
}
_b = Cache;
_Cache_Storage = { value: new AsyncStorage() };
// App states.
var State;
(function (State) {
    State["Initial"] = "initial";
    State["Empty"] = "empty";
    State["LoadingEmoji"] = "loading-emoji";
    State["LoadingStats"] = "loading-stats";
    State["Loaded"] = "loaded";
    State["Error"] = "error";
})(State || (State = {}));
// Button types.
var ButtonType;
(function (ButtonType) {
    ButtonType["Primary"] = "primary";
    ButtonType["Outline"] = "outline";
})(ButtonType || (ButtonType = {}));
// Button sizes.
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Small"] = "small";
    ButtonSize["Medium"] = "medium";
    ButtonSize["Large"] = "large";
})(ButtonSize || (ButtonSize = {}));
// Formats the time difference between two timestamps.
function formatTimeDifference(startTime, endTime) {
    const diff = endTime - startTime;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
}
// Downloads a JSON file.
function downloadJSON(data, filename) {
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
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
// Custom hook to use state with caching.
function useCachedState(keyPath, defaultValue, onLoadFromCache) {
    const [state, setState] = useState(defaultValue);
    useEffect(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            const cachedState = (yield Cache[keyPath]);
            if (cachedState) {
                setState(cachedState);
            }
            if (onLoadFromCache) {
                onLoadFromCache(cachedState);
            }
        }))();
    }, []);
    const setCachedState = useCallback((value) => {
        Cache[keyPath] = value;
        setState(value);
    }, []);
    return [state, setCachedState];
}
function useEmoji() {
    const [percentLoaded, setPercentLoaded] = useState(0);
    const [state, setState] = useState(State.Initial);
    const [emojis, setEmojis] = useCachedState(CacheKey.Emoji, []);
    const [stats, setStats] = useCachedState(CacheKey.Stats, [], (value) => {
        setState(value ? State.Loaded : State.Empty);
    });
    const [startTime, setStartTime] = useCachedState(CacheKey.StartTime, undefined);
    const [endTime, setEndTime] = useCachedState(CacheKey.EndTime, undefined);
    const users = useMemo(() => {
        const map = new Map();
        stats.forEach(({ name, items = [] }) => {
            items.forEach(({ messages = [] }) => {
                messages.forEach(({ user, username }) => {
                    var _c;
                    const resultsSoFar = (_c = map.get(username)) !== null && _c !== void 0 ? _c : [];
                    map.set(username, [...resultsSoFar, name]);
                });
            });
        });
        return Array.from(map.entries())
            .map(([username, emoji]) => ({ username, emoji }))
            .sort((a, b) => b.emoji.length - a.emoji.length);
    }, [stats]);
    const loadEmoji = useCallback((forced) => __awaiter(this, void 0, void 0, function* () {
        var _c;
        // Get ready to load the emoji...
        setPercentLoaded(0);
        setStartTime(Date.now());
        setState(State.LoadingEmoji);
        // Fetch the emoji list, reading from the cache if possible.
        const updatedEmojis = !forced && emojis
            ? emojis
            : yield API.fetchEmojiList({ setPercentLoaded });
        if (forced || !emojis)
            setEmojis(updatedEmojis);
        setPercentLoaded(1);
        const nonAliasedEmoji = updatedEmojis.filter(({ alias_for }) => !alias_for);
        // Fetch the emoji stats, reading from the cache if possible.
        const updatedStats = !forced && stats ? stats : [];
        try {
            if (updatedStats.length === 0) {
                setState(State.LoadingStats);
                setPercentLoaded(0);
                for (const emoji of nonAliasedEmoji) {
                    const index = nonAliasedEmoji.findIndex((e) => e === emoji);
                    const { count, items } = yield API.fetchEmojiUsage({
                        emoji: emoji.name,
                    });
                    setPercentLoaded((index + 1) / nonAliasedEmoji.length);
                    if (count > 0) {
                        updatedStats.push({
                            name: emoji.name,
                            url: emoji.url,
                            createdAt: ((_c = emoji.created) !== null && _c !== void 0 ? _c : 0) * 1000,
                            items,
                            count,
                        });
                    }
                }
            }
        }
        catch (error) {
            console.error("EW: Failed to load all stats", error);
            setState(State.Error);
        }
        finally {
            setPercentLoaded(1);
            setStats(updatedStats.sort((a, b) => b.count - a.count));
            setEndTime(Date.now());
            if (state !== State.Error)
                setState(State.Loaded);
        }
    }), [stats]);
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
const Button = ({ type = ButtonType.Primary, size = ButtonSize.Medium, className, children, onClick, disabled, }) => {
    return html `
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
const Emoji = ({ name, url, count }) => {
    return html `
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
const Emojis = ({ emojis }) => {
    return html `
		<div className="emojis">
			<div className="emojis-scroll-wrapper">
				${emojis.map((emoji) => html `<${Emoji} key=${emoji.name} ...${emoji} />`)}
			</div>
		</div>
	`;
};
const User = ({ username, emoji }) => {
    const [url, setUrl] = useState("");
    useEffect(() => {
        const fetchProfile = () => __awaiter(void 0, void 0, void 0, function* () {
            var _c, _d;
            const user = yield API.fetchProfile({ username });
            setUrl((_d = (_c = user === null || user === void 0 ? void 0 : user.profile) === null || _c === void 0 ? void 0 : _c.image_original) !== null && _d !== void 0 ? _d : "");
        });
        fetchProfile();
    }, []);
    return html `
		<div className="user">
			<div className="user-img-wrapper">
				${url && html `<img className="user-img" src=${url} />`}
				${!url && html `<${Loader} />`}
			</div>
			<span className="user-footer">
				<span className="user-count">${emoji.length}</span>
				<br />
				${emoji.length === 1 ? "reaction" : "reactions"}
			</span>
		</div>
	`;
};
const Users = ({ users }) => {
    return html `
		<div className="users">
			${users.map((user) => html `<${User} key=${user.username} ...${user} />`)}
		</div>
	`;
};
const Loader = ({ size = "medium" }) => {
    return html `
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
const ProgressBar = ({ title, percent, }) => {
    return html `
		<div className="progress">
			<progress className="progress-bar" value=${percent * 100} max="100">
				${percent * 100}
			</progress>
			<span className="progress-title">${title}</span>
		</div>
	`;
};
const LoadedState = ({ emojis, stats, users, startTime, endTime, regenerateReport, }) => {
    var _c, _d;
    const rarestCount = (_d = (_c = stats.slice(-1)[0]) === null || _c === void 0 ? void 0 : _c.count) !== null && _d !== void 0 ? _d : 1;
    const rarestEmoji = shuffle(stats.filter(({ count }) => {
        return count === rarestCount;
    }));
    const topUsers = users.slice(0, 3);
    const topUsersEmoji = topUsers.flatMap(({ emoji }) => emoji);
    const topUserEmojis = Object.values(topUsersEmoji.reduce((acc, emojiName) => {
        var _c, _d, _e, _f, _g;
        if (!acc[emojiName]) {
            acc[emojiName] = {
                name: emojiName,
                url: (_d = (_c = stats.find(({ name }) => name === emojiName)) === null || _c === void 0 ? void 0 : _c.url) !== null && _d !== void 0 ? _d : "",
                createdAt: (_f = (_e = stats.find(({ name }) => name === emojiName)) === null || _e === void 0 ? void 0 : _e.createdAt) !== null && _f !== void 0 ? _f : 0,
                items: [],
                count: (_g = topUsersEmoji.filter((e) => e === emojiName).length) !== null && _g !== void 0 ? _g : 0,
            };
        }
        return acc;
    }, {})).sort((a, b) => b.count - a.count);
    const emojiThisYear = stats.filter(({ createdAt = 0 }) => {
        return new Date(createdAt).getFullYear() === new Date().getFullYear();
    });
    const onRegenerate = () => {
        if (confirm("Are you sure you want to regenerate your Emoji Wrapped report? You'll lose your previous report, and it may take a while to pull fresh data.") === false) {
            return;
        }
        regenerateReport();
    };
    return html `
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
						onClick=${() => downloadJSON({ emojis, stats, startTime, endTime }, "emoji-wrapped.json")}
					>
						Export JSON
					<//>
				</div>
			</div>
		</div>
	`;
};
const EmptyState = ({ state, percentLoaded, loadEmoji, }) => {
    const isLoading = state === State.LoadingEmoji || state === State.LoadingStats;
    return html `
		<div className="app-empty-state">
			<p className="app-description">View a report of your top used emoji.</p>
			<${Button}
				className="app-button"
				onClick=${() => loadEmoji()}
				disabled=${isLoading}
			>
				${isLoading ? "Loading" : "Generate"}
				${isLoading && html `<${Loader} size="small" />`}
			<//>
			<p className="app-footer">
				${isLoading &&
        html `<${ProgressBar}
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
    return html `
		<div className="app-error-state">
			<p className="app-error">Failed to load emoji stats 🥺</p>
		</div>
	`;
};
const App = () => {
    const { emojis, stats, users, state, percentLoaded, startTime, endTime, loadEmoji, } = useEmoji();
    return html `
		<div className="app">
			<h2 className="app-title">Emoji Wrapped ✨</h2>
			${state === State.Initial && html `<${Loader} />`}
			${[State.Empty, State.LoadingStats, State.LoadingEmoji].includes(state) &&
        html `<${EmptyState}
				state=${state}
				percentLoaded=${percentLoaded}
				loadEmoji=${loadEmoji}
			/>`}
			${state === State.Error && html `<${ErrorState} />`}
			${state === State.Loaded &&
        html `<${LoadedState}
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
    render(html `<${App} />`, root);
    const anchorElement = document.getElementById("list_emoji_section");
    if (!anchorElement)
        return;
    anchorElement.insertBefore(root, anchorElement.firstChild);
})();
