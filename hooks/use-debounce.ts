import { useState, useEffect } from "react";

type UseDebounceConfigType<T> = { value: T; delayMs: number };

export function useDebounce<T>(config: UseDebounceConfigType<T>): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(config.value);

  useEffect(() => {
    const timer = setTimeout(
      () => setDebouncedValue(config.value),
      config.delayMs
    );

    return () => clearTimeout(timer);
  }, [config.value, config.delayMs]);

  return debouncedValue;
}
