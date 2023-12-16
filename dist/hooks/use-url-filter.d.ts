import { UseClientFilterConfigType, UseClientFilterReturnType } from "./use-client-filter";
export type UseUrlFilterConfigType<T> = UseClientFilterConfigType<T>;
export declare function useUrlFilter<T>(config: UseUrlFilterConfigType<T>): UseClientFilterReturnType<T>;
