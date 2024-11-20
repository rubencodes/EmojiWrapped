import { AsyncStorage } from "./AsyncStorage";
import { CacheKey, CacheTypeMap } from "../types/cache-types";
import type { Emoji, Stat } from "../types/entity-types";

// Cache class to store and retrieve data.
export class Cache {
	static #Storage = new AsyncStorage();

	static get<Key extends CacheKey>(
		key: Key
	): Promise<CacheTypeMap[Key] | undefined> {
		return this.#Storage.get(key);
	}

	static set<Key extends CacheKey>(key: Key, value: CacheTypeMap[Key]): void {
		this.#Storage.set(key, value);
	}
}

export { CacheKey, CacheTypeMap };
