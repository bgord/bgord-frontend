import { useRef } from "react";

import {
  RateLimiterOptionsType,
  RateLimiterResultErrorType,
  RateLimiter,
} from "../rate-limiter";

export type UseRateLimiterActionType<T> = (...args: T[]) => void;

export type UseRateLimiterOptionsType<T> = RateLimiterOptionsType & {
  action: UseRateLimiterActionType<T>;
  fallback?: (remainingMs: RateLimiterResultErrorType["remainingMs"]) => void;
};

export type UseRateLimiterReturnType<T> = UseRateLimiterActionType<T>;

export function useRateLimiter<T>(
  options: UseRateLimiterOptionsType<T>
): UseRateLimiterReturnType<T> {
  const rateLimiter = useRef<RateLimiter>(new RateLimiter(options));

  return function executor(...args: T[]) {
    const currentTimestamp = Date.now();
    const result = rateLimiter.current.verify(currentTimestamp);

    if (result.allowed) {
      return options.action(...args);
    }

    return options.fallback?.(result.remainingMs);
  };
}
