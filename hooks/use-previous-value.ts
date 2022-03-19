import { useEffect, useRef } from "react";

export function usePreviousValue<T>(
  value: T,
  defaultValue: T | null | undefined = null
) {
  const previousValue = useRef<T | null | undefined>(defaultValue);

  useEffect(() => {
    previousValue.current = value;
  });

  return previousValue.current;
}
