import { useEffect, useRef } from "react";

/**
 * Hook to track previous value of a variable
 *
 * @example
 * ```tsx
 * function Counter() {
 *   const [count, setCount] = useState(0);
 *   const prevCount = usePreviousValue(count);
 *
 *   return <div>Previous: {prevCount}, Current: {count}</div>;
 * }
 * ```
 */
export function usePreviousValue<T>(value: T, defaultValue?: T): T | undefined {
  const previousValue = useRef<T | undefined>(defaultValue);

  useEffect(() => {
    previousValue.current = value;
  }, [value]); // Add value dependency for clarity

  return previousValue.current;
}
