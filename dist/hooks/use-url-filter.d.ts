import { UseFilterConfigType, UseFilterReturnType } from "./use-filter";
export type UseUrlFilterConfigType<T> = UseFilterConfigType<T>;
export declare function useUrlFilter<T>(config: UseUrlFilterConfigType<T>): UseFilterReturnType<T>;
