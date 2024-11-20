import { useCallback, useRef } from "react";
import { RateLimiter, RateLimiterOptionsType, RateLimiterResultErrorType } from "../rate-limiter";

type UseRateLimiterActionType<T> = (...args: T[]) => void;

type UseRateLimiterOptionsType<T> = RateLimiterOptionsType & {
  action: UseRateLimiterActionType<T>;
  fallback?: (remainingMs: RateLimiterResultErrorType["remainingMs"]) => void;
};

/**
 * Hook to rate limit function calls
 *
 * @example
 * ```tsx
 * function SubmitButton() {
 *   const handleSubmit = useRateLimiter({
 *     action: () => submitForm(),
 *     interval: 1000,
 *     limit: 1,
 *     fallback: (remainingMs) => {
 *       alert(`Please wait ${remainingMs}ms`);
 *     }
 *   });
 *
 *   return <button onClick={handleSubmit}>Submit</button>;
 * }
 * ```
 */
export function useRateLimiter<T>(options: UseRateLimiterOptionsType<T>): UseRateLimiterActionType<T> {
  const rateLimiter = useRef<RateLimiter>(new RateLimiter(options));

  const executor = useCallback(
    (...args: T[]) => {
      const currentTimestamp = Date.now();
      const result = rateLimiter.current.verify(currentTimestamp);

      if (result.allowed) {
        return options.action(...args);
      }

      return options.fallback?.(result.remainingMs);
    },
    [options.action, options.fallback],
  );

  return executor;
}
