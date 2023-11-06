type UseDebounceConfigType<T> = {
    value: T;
    delayMs: number;
};
export declare function useDebounce<T>(config: UseDebounceConfigType<T>): T;
export {};
