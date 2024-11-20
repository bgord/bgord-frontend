import { useCallback, useEffect, useState } from "react";

type UseDebounceConfigType<T> = { value: T; delayMs: number };

/**
 * A hook that debounces a value, updating it only after a specified delay of no changes.
 *
 * @template T - The type of the value to debounce
 *
 * @param config - Configuration object for the debounce behavior
 * @param config.value - The value to debounce. Can be of any type.
 * @param config.delayMs - The delay in milliseconds before updating the debounced value
 *
 * @returns The debounced value. Initially returns the provided value, then updates after
 *          the specified delay when the input value changes.
 *
 * @example
 * ```tsx
 * function SearchComponent() {
 *   const [searchTerm, setSearchTerm] = useState("");
 *   const debouncedSearch = useDebounce({ value: searchTerm, delayMs: 500 });
 *
 *   useEffect(() => {
 *     // API call will only happen 500ms after the user stops typing
 *     searchAPI(debouncedSearch);
 *   }, [debouncedSearch]);
 *
 *   return <input onChange={e => setSearchTerm(e.target.value)} />;
 * }
 * ```
 *
 * @remarks
 * - The hook uses `setTimeout` internally and cleans up pending timeouts on unmount
 * - A new timer is created each time the input value changes
 * - The delay timer is reset whenever the value changes before the delay period ends
 */
export function useDebounce<T>(config: UseDebounceConfigType<T>): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(config.value);

  const updateValue = useCallback(() => setDebouncedValue(config.value), [config.value]);

  useEffect(() => {
    const timer = setTimeout(updateValue, config.delayMs);
    return () => clearTimeout(timer);
  }, [config.delayMs, updateValue]);

  return debouncedValue;
}
