import { RateLimiterOptionsType, RateLimiterResultErrorType } from "../rate-limiter";
declare type UseRateLimiterOptionsType<T> = RateLimiterOptionsType & {
    action: (...args: T[]) => void;
    fallback?: (remainingMs: RateLimiterResultErrorType["remainingMs"]) => void;
};
export declare function useRateLimiter<T>(options: UseRateLimiterOptionsType<T>): (...args: T[]) => void;
export {};
