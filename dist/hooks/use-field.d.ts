import { Dispatch, SetStateAction } from "react";
export declare type UseFieldDefaultValueType<T> = T | (() => T);
export declare type UseFieldReturnType<T> = {
    value: T;
    set: Dispatch<SetStateAction<T>>;
    clear: VoidFunction;
};
export declare function useField<T>(defaultValue: UseFieldDefaultValueType<T>): UseFieldReturnType<T>;
