/// <reference types="react" />
export declare function useField<T>(defaultValue: T | (() => T)): {
    value: T;
    set: import("react").Dispatch<import("react").SetStateAction<T>>;
    clear: () => void;
};
