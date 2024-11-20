import { useEffect, useState, useCallback } from "preact/hooks";
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
	(value: CacheTypeMap[Key] | DefaultValue) => void
] {
	const [state, setState] = useState<CacheTypeMap[Key] | DefaultValue>(
		defaultValue
	);
	useEffect(() => {
		(async () => {
			const cachedState = await Cache.get(keyPath);
			if (cachedState) {
				setState(cachedState);
			}

			if (onLoadFromCache) {
				onLoadFromCache(cachedState);
			}
		})();
	}, []);

	const setCachedState = useCallback(
		(value: CacheTypeMap[Key] | DefaultValue) => {
			Cache.set(keyPath, value);
			setState(value);
		},
		[]
	);

	return [state, setCachedState];
}
