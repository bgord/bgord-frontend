import type { TimestampType } from "@bgord/node/dist/schema";
export declare type RateLimiterOptionsType = {
    limitMs: TimestampType;
};
declare type RateLimiterResultSuccessType = {
    allowed: true;
};
export declare type RateLimiterResultErrorType = {
    allowed: false;
    remainingMs: TimestampType;
};
declare type RateLimiterResultType = RateLimiterResultSuccessType | RateLimiterResultErrorType;
export declare class RateLimiter {
    private lastInvocationTimestamp;
    private options;
    constructor(options: RateLimiterOptionsType);
    verify(currentTimestamp: TimestampType): RateLimiterResultType;
}
export {};
