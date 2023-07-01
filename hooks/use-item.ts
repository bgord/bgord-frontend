import { useState } from "react";

export type UseItemReturnType<T> = {
  clear: VoidFunction;
  set: (item: T) => void;
  toggle: (item: T) => any;
  value: T | null;
};

export function useItem<T>(defaultItem: T | null): UseItemReturnType<T> {
  const [item, setItem] = useState<T | null>(defaultItem ?? null);

  return {
    clear: () => setItem(null),
    set: (updated: T) => setItem(updated),
    toggle: (x: T) =>
      setItem((current) => {
        if (current === null) {
          return x;
        }
        if (current === x) {
          return null;
        }
        if (current !== x) {
          return x;
        }
        return current;
      }),
    value: item,
  };
}
