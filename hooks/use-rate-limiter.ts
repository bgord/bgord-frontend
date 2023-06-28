import { useRef } from "react";

import {
  RateLimiterOptionsType,
  RateLimiterResultErrorType,
  RateLimiter,
} from "../rate-limiter";

type UseRateLimiterOptionsType<T> = RateLimiterOptionsType & {
  action: (...args: T[]) => void;
  fallback?: (remainingMs: RateLimiterResultErrorType["remainingMs"]) => void;
};

export function useRateLimiter<T>(options: UseRateLimiterOptionsType<T>) {
  const rateLimiter = useRef<RateLimiter>(new RateLimiter(options));

  function executor(...args: T[]) {
    const currentTimestamp = Date.now();
    const result = rateLimiter.current.verify(currentTimestamp);

    if (result.allowed) {
      return options.action(...args);
    }

    return options.fallback?.(result.remainingMs);
  }

  return executor;
}
