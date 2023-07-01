import { useState } from "react";

type UseItemValueType<T> = T | null;

export type UseItemReturnType<T> = {
  clear: VoidFunction;
  set: (item: NonNullable<UseItemValueType<T>>) => void;
  toggle: (item: NonNullable<UseItemValueType<T>>) => any;
  value: UseItemValueType<T>;
};

export type UseItemConfigType<T> = {
  defaultItem?: UseItemValueType<T>;

  comparisonFn?: (a: UseItemValueType<T>, b: UseItemValueType<T>) => boolean;
};

export function useItem<T>(config: UseItemConfigType<T>): UseItemReturnType<T> {
  const defaultComparisonFn = (
    a: UseItemValueType<T>,
    b: UseItemValueType<T>
  ) => a === b;

  const comparisonFn = config?.comparisonFn ?? defaultComparisonFn;

  const [item, setItem] = useState<UseItemValueType<T>>(
    config.defaultItem ?? null
  );

  return {
    clear: () => setItem(null),

    set: (updated) => setItem(updated),

    toggle: (x) =>
      setItem((current) => {
        if (current === null) return x;

        return comparisonFn(current, x) ? null : x;
      }),

    value: item,
  };
}
