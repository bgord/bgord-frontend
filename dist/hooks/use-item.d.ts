type UseItemValueType<T> = T | null;
export type UseItemReturnType<T> = {
    clear: VoidFunction;
    set: (item: NonNullable<UseItemValueType<T>>) => void;
    toggle: (item: NonNullable<UseItemValueType<T>>) => any;
    value: UseItemValueType<T>;
    isDefault: boolean;
    exists: boolean;
    compare: (a: UseItemValueType<T>) => boolean;
};
export type UseItemConfigType<T> = {
    defaultItem?: UseItemValueType<T>;
    comparisonFn?: (a: UseItemValueType<T>, b: UseItemValueType<T>) => boolean;
};
export declare function useItem<T>(config?: UseItemConfigType<T>): UseItemReturnType<T>;
export {};
