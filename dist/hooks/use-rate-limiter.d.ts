import { RateLimiterOptionsType, RateLimiterResultErrorType } from "../rate-limiter";
declare type UseRateLimiterOptionsType = RateLimiterOptionsType & {
    action: Function;
    fallback?: (remainingMs: RateLimiterResultErrorType["remainingMs"]) => void;
};
export declare function useRateLimiter(options: UseRateLimiterOptionsType): () => any;
export {};
