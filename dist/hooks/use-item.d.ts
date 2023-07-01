export declare type UseItemReturnType<T> = {
    clear: VoidFunction;
    set: (item: T) => void;
    toggle: (item: T) => any;
    value: T | null;
};
export declare function useItem<T>(defaultItem: T | null): UseItemReturnType<T>;
