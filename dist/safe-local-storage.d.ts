import * as Storage from "ts-storage";
export declare class SafeLocalStorage {
    static get<T extends Storage.AllowedTypes>(key: string, fallbackValue: T): T;
    static set<T extends Storage.AllowedTypes>(key: string, value: T): void;
}
