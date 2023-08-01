import type { TimestampType } from "@bgord/node/dist/schema";
export declare type RateLimiterOptionsType = {
    limitMs: TimestampType;
};
export declare type RateLimiterResultSuccessType = {
    allowed: true;
};
export declare type RateLimiterResultErrorType = {
    allowed: false;
    remainingMs: TimestampType;
};
export declare type RateLimiterResultType = RateLimiterResultSuccessType | RateLimiterResultErrorType;
export declare class RateLimiter {
    private lastInvocationTimestamp;
    private options;
    constructor(options: RateLimiterOptionsType);
    verify(currentTimestamp: TimestampType): RateLimiterResultType;
}
