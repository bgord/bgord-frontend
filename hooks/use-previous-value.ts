import { useEffect, useRef } from "react";

export function usePreviousValue<T>(value: T) {
  const previousValue = useRef<T | null>(null);

  useEffect(() => {
    previousValue.current = value;
  });

  return previousValue.current;
}
