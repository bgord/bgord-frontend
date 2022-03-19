/// <reference types="react" />
import { UseFilterConfigType } from "./use-filter";
export declare type UseUrlFilterConfigType<T> = UseFilterConfigType<T> & {
    label: string;
};
export declare function useUrlFilter<T>(config: UseUrlFilterConfigType<T>): {
    query: import("./use-filter").UseFilterQueryType;
    clear: () => void;
    onChange: (event: import("react").ChangeEvent<HTMLInputElement>) => void;
    filterFn: (value: T) => boolean;
    options: string[];
    onUpdate: (current: import("./use-filter").UseFilterQueryType, previous: import("./use-filter").UseFilterQueryType) => void;
};
