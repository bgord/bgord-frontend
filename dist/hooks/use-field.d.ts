import { Dispatch, SetStateAction } from "react";
export declare type UseFieldDefaultValueType<T> = T | (() => T);
export declare type UseFieldNameType = string;
export declare type UseFieldReturnType<T> = {
    value: T;
    set: Dispatch<SetStateAction<T>>;
    clear: VoidFunction;
    label: {
        props: {
            htmlFor: UseFieldNameType;
        };
    };
    input: {
        props: {
            id: UseFieldNameType;
            name: UseFieldNameType;
        };
    };
    changed: boolean;
    unchanged: boolean;
};
export declare function useField<T>(name: UseFieldNameType, defaultValue: UseFieldDefaultValueType<T>): UseFieldReturnType<T>;
