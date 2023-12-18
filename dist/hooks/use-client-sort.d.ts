/// <reference types="react" />
import { UseFieldNameType, UseFieldReturnType } from "./use-field";
export type UseClientSortFnType<T> = (a: T, b: T) => number;
export type UseClientSortReturnType<T> = {
    sortFn: UseClientSortFnType<T>;
    options: UseClientSortOptionType[];
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & UseFieldReturnType<UseClientSortOptionType>;
export type UseClientSortOptionType = string;
type UseClientSortConfigType<T> = {
    enum: Record<UseClientSortOptionType, UseClientSortOptionType> & {
        default: UseClientSortOptionType;
    };
    options: Record<UseClientSortOptionType, UseClientSortFnType<T>>;
};
export declare const defaultSortFn: () => number;
export declare function useClientSort<T>(name: UseFieldNameType, config: UseClientSortConfigType<T>): UseClientSortReturnType<T>;
export {};
