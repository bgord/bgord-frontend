import type { TimestampType } from "@bgord/node/dist/schema";
export type RateLimiterOptionsType = {
    limitMs: TimestampType;
};
/** @public */
export type RateLimiterResultSuccessType = {
    allowed: true;
};
export type RateLimiterResultErrorType = {
    allowed: false;
    remainingMs: TimestampType;
};
/** @public */
export type RateLimiterResultType = RateLimiterResultSuccessType | RateLimiterResultErrorType;
export declare class RateLimiter {
    private lastInvocationTimestamp;
    private options;
    constructor(options: RateLimiterOptionsType);
    verify(currentTimestamp: TimestampType): RateLimiterResultType;
}
