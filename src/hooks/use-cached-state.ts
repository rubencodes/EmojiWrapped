import { useEffect, useState, useCallback, StateUpdater } from "preact/hooks";
import { Cache, CacheKey, CacheTypeMap } from "../utilities/Cache";

// Custom hook to use state with caching.
export function useCachedState<
	Key extends CacheKey,
	DefaultValue extends CacheTypeMap[Key]
>(
	keyPath: Key,
	defaultValue: DefaultValue,
	onLoadFromCache?: (value: CacheTypeMap[Key] | undefined) => void
): [
	CacheTypeMap[Key] | DefaultValue,
	(value: StateUpdater<DefaultValue | CacheTypeMap[Key]>) => void
] {
	const [state, setState] = useState<CacheTypeMap[Key] | DefaultValue>(
		defaultValue
	);
	useEffect(() => {
		(async () => {
			let cachedState = await Cache.get(keyPath);
			if (cachedState) {
				setState(cachedState);
			}

			// Migrate legacy stats to new cache key.
			if (
				typeof cachedState === "undefined" &&
				keyPath === CacheKey.SearchResults
			) {
				cachedState = (await Cache.get(CacheKey.Stats)) as CacheTypeMap[Key];
				if (cachedState) {
					setState(cachedState);
				}
			}

			if (onLoadFromCache) {
				onLoadFromCache(cachedState);
			}
		})();
	}, []);

	const setCachedState = useCallback(
		(value: StateUpdater<DefaultValue | CacheTypeMap[Key]>) => {
			setState((currentValue) => {
				if (typeof value === "function") {
					const newValue = value(currentValue);
					Cache.set(keyPath, newValue);
					return newValue;
				}

				Cache.set(keyPath, value);
				return value;
			});
		},
		[]
	);

	return [state, setCachedState];
}
