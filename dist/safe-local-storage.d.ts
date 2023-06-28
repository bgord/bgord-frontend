import * as Storage from "ts-storage";
export declare type SafeLocalStorageKeyType = string;
export declare class SafeLocalStorage {
    static get<T extends Storage.AllowedTypes>(key: SafeLocalStorageKeyType, fallbackValue: T): T;
    static set<T extends Storage.AllowedTypes>(key: SafeLocalStorageKeyType, value: T): void;
    static clear(key: SafeLocalStorageKeyType): void;
}
