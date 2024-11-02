import * as Storage from "ts-storage";

export type SafeLocalStorageKeyType = string;

export class SafeLocalStorage {
  static get<T extends Storage.AllowedTypes>(
    key: SafeLocalStorageKeyType,
    fallbackValue: T,
  ): T {
    return Storage.get(key, fallbackValue).value;
  }

  static set<T extends Storage.AllowedTypes>(
    key: SafeLocalStorageKeyType,
    value: T,
  ) {
    Storage.set(key, value);
  }

  static clear(key: SafeLocalStorageKeyType) {
    Storage.remove(key);
  }
}
