import type { TimestampType } from "@bgord/node/dist/schema";
import type { Falsy } from "@bgord/node";

export type RateLimiterOptionsType = {
  limitMs: TimestampType;
};

type RateLimiterResultSuccessType = { allowed: true };
export type RateLimiterResultErrorType = {
  allowed: false;
  remainingMs: TimestampType;
};
type RateLimiterResultType =
  | RateLimiterResultSuccessType
  | RateLimiterResultErrorType;

export class RateLimiter {
  private lastInvocationTimestamp: Falsy<TimestampType> = null;

  private options: RateLimiterOptionsType;

  constructor(options: RateLimiterOptionsType) {
    this.options = options;
  }

  verify(currentTimestamp: TimestampType): RateLimiterResultType {
    if (!this.lastInvocationTimestamp) {
      this.lastInvocationTimestamp = currentTimestamp;

      return { allowed: true };
    }

    const nextAllowedTimestamp =
      this.lastInvocationTimestamp + this.options.limitMs;

    if (nextAllowedTimestamp <= currentTimestamp) {
      this.lastInvocationTimestamp = currentTimestamp;

      return { allowed: true };
    }

    return {
      allowed: false,
      remainingMs: nextAllowedTimestamp - currentTimestamp,
    };
  }
}
