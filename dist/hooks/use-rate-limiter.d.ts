import { RateLimiterOptionsType, RateLimiterResultErrorType } from "../rate-limiter";
export declare type UseRateLimiterActionType<T> = (...args: T[]) => void;
export declare type UseRateLimiterOptionsType<T> = RateLimiterOptionsType & {
    action: UseRateLimiterActionType<T>;
    fallback?: (remainingMs: RateLimiterResultErrorType["remainingMs"]) => void;
};
export declare type UseRateLimiterReturnType<T> = UseRateLimiterActionType<T>;
export declare function useRateLimiter<T>(options: UseRateLimiterOptionsType<T>): UseRateLimiterReturnType<T>;
