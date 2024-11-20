/**
 * Rate limiting implementation with timestamp-based throttling
 */

import type { Falsy } from "@bgord/node";
import type { TimestampType } from "@bgord/node/dist/schema";

export type RateLimiterOptionsType = {
  limitMs: TimestampType;
};

/** @public */
type RateLimiterResultSuccessType = { allowed: true };

export type RateLimiterResultErrorType = {
  allowed: false;
  remainingMs: TimestampType;
};

/** @public */
type RateLimiterResultType = RateLimiterResultSuccessType | RateLimiterResultErrorType;

export class RateLimiter {
  private lastInvocationTimestamp: Falsy<TimestampType> = null;

  private options: RateLimiterOptionsType;

  /**
   * @param options - Rate limiter configuration
   * @param options.limitMs - Minimum time between allowed invocations
   */
  constructor(options: RateLimiterOptionsType) {
    this.options = options;
  }

  /**
   * Verifies if operation is allowed at current timestamp
   * @param currentTimestamp - Current timestamp to check against
   * @returns Result indicating if operation is allowed
   */
  verify(currentTimestamp: TimestampType): RateLimiterResultType {
    if (!this.lastInvocationTimestamp) {
      this.lastInvocationTimestamp = currentTimestamp;

      return { allowed: true };
    }

    const nextAllowedTimestamp = this.lastInvocationTimestamp + this.options.limitMs;

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
