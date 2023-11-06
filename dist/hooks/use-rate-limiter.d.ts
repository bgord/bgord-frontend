import { RateLimiterOptionsType, RateLimiterResultErrorType } from "../rate-limiter";
export type UseRateLimiterActionType<T> = (...args: T[]) => void;
export type UseRateLimiterOptionsType<T> = RateLimiterOptionsType & {
    action: UseRateLimiterActionType<T>;
    fallback?: (remainingMs: RateLimiterResultErrorType["remainingMs"]) => void;
};
export type UseRateLimiterReturnType<T> = UseRateLimiterActionType<T>;
export declare function useRateLimiter<T>(options: UseRateLimiterOptionsType<T>): UseRateLimiterReturnType<T>;
