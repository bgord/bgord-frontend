import { Dispatch, SetStateAction } from "react";
export type UseFieldDefaultValueType<T> = T | (() => T);
export type UseFieldNameType = string;
export type UseFieldReturnType<T> = {
    value: T;
    set: Dispatch<SetStateAction<T>>;
    clear: VoidFunction;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
export declare function extractUseField<T, X>(props: UseFieldReturnType<T> & X): {
    field: UseFieldReturnType<T>;
    rest: X;
};
