import { useEffect, useRef } from "react";

export function usePreviousValue<T>(
  value: T,
  defaultValue?: T | undefined
): T | undefined {
  const previousValue = useRef<T | undefined>(defaultValue);

  useEffect(() => {
    previousValue.current = value;
  });

  return previousValue.current;
}
