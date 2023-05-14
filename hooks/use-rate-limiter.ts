import { useRef } from "react";

import {
  RateLimiterOptionsType,
  RateLimiterResultErrorType,
  RateLimiter,
} from "../rate-limiter";

type UseRateLimiterOptionsType = RateLimiterOptionsType & {
  action: Function;
  fallback?: (remainingMs: RateLimiterResultErrorType["remainingMs"]) => void;
};

export function useRateLimiter(options: UseRateLimiterOptionsType) {
  const rateLimiter = useRef<RateLimiter>(new RateLimiter(options));

  function executor() {
    const currentTimestamp = Date.now();
    const result = rateLimiter.current.verify(currentTimestamp);

    if (result.allowed) {
      return options.action();
    }

    return options.fallback?.(result.remainingMs);
  }

  return executor;
}
