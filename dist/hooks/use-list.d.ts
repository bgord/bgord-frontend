import { SetStateAction, Dispatch } from "react";
export declare type UseListActionsType<T> = {
    clear: VoidFunction;
    add: (x: T | T[]) => void;
    remove: (x: T) => void;
    toggle: (x: T) => void;
    isAdded: (x: T) => boolean;
    update: Dispatch<SetStateAction<T[]>>;
};
export declare type UseListReturnType<T> = [T[], UseListActionsType<T>];
export declare type UseListConfigType<T> = {
    defaultItems?: T[];
    comparisonFn?: (a: T, b: T) => boolean;
};
export declare function useList<T>(config?: UseListConfigType<T>): UseListReturnType<T>;
