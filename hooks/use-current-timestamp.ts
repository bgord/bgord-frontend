import type { TimestampType } from "@bgord/node/dist/schema";
import { useCallback, useEffect, useState } from "react";
import { Time } from "../time";

/**
 * Gets the current timestamp in milliseconds
 *
 * @returns Current timestamp as a number
 */
export function getCurrentTimestamp(): TimestampType {
  return Date.now();
}

/**
 * Hook that provides a continuously updating current timestamp
 *
 * @description
 * This hook returns the current timestamp and updates it every second.
 * The timestamp is automatically cleaned up when the component unmounts.
 * All callbacks are memoized for optimal performance.
 *
 * @example
 * ```tsx
 * function TimeDisplay() {
 *   const timestamp = useCurrentTimestamp();
 *
 *   return (
 *     <div>
 *       Current time: {new Date(timestamp).toLocaleTimeString()}
 *     </div>
 *   );
 * }
 * ```
 *
 * @returns Current timestamp in milliseconds
 */
export function useCurrentTimestamp(): TimestampType {
  // Initialize state with memoized initial value
  const [timestamp, setTimestamp] =
    useState<TimestampType>(getCurrentTimestamp);

  // Memoize the timestamp update callback
  const updateTimestamp = useCallback(
    () => setTimestamp(getCurrentTimestamp()),
    [],
  );

  useEffect(() => {
    // Start the interval with memoized callback
    const timer = setInterval(updateTimestamp, Time.Seconds(1).ms);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, [updateTimestamp]); // Only recreate effect if updateTimestamp changes

  return timestamp;
}
