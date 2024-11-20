import { $FIXME } from "../types/base-types";

// IndexedDB wrapper to store and retrieve data.
export class AsyncStorage {
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

	async set(key: string, value: any) {
		return this.#withStore("readwrite", (store: IDBObjectStore) =>
			store.put(value, key)
		);
	}

	async get(key: string): Promise<any | undefined> {
		return this.#withStore("readonly", (store: IDBObjectStore) =>
			store.get(key)
		);
	}

	async remove(key: string) {
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
