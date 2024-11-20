/**
 * Type-safe localStorage wrapper
 */
import * as Storage from "ts-storage";

export type SafeLocalStorageKeyType = string;

export class SafeLocalStorage {
  /**
   * Gets value from localStorage with type safety
   * @param key - Storage key
   * @param fallbackValue - Default if key not found
   * @returns Stored value or fallback
   */
  static get<T extends Storage.AllowedTypes>(key: SafeLocalStorageKeyType, fallbackValue: T): T {
    return Storage.get(key, fallbackValue).value;
  }
  /**
   * Sets value in localStorage
   * @param key - Storage key
   * @param value - Value to store
   */
  static set<T extends Storage.AllowedTypes>(key: SafeLocalStorageKeyType, value: T) {
    Storage.set(key, value);
  }

  /**
   * Removes key from localStorage
   * @param key - Storage key to clear
   */
  static clear(key: SafeLocalStorageKeyType) {
    Storage.remove(key);
  }
}
