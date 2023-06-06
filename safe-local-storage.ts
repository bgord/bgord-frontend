import * as Storage from "ts-storage";

export class SafeLocalStorage {
  static get<T extends Storage.AllowedTypes>(key: string, fallbackValue: T): T {
    return Storage.get(key, fallbackValue).value;
  }

  static set<T extends Storage.AllowedTypes>(key: string, value: T) {
    Storage.set(key, value);
  }
}
