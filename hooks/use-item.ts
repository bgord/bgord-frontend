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

function defaultComparisonFn<T>(
  a: UseItemValueType<T>,
  b: UseItemValueType<T>
) {
  return a === b;
}

export function useItem<T>(
  config?: UseItemConfigType<T>
): UseItemReturnType<T> {
  const comparisonFn = config?.comparisonFn ?? defaultComparisonFn;

  const [item, setItem] = useState<UseItemValueType<T>>(
    config?.defaultItem ?? null
  );

  return {
    clear: () => setItem(null),

    set: (updated) => setItem(updated),

    toggle: (newer) =>
      setItem((current) => {
        if (current === null) return newer;

        return comparisonFn(current, newer) ? null : newer;
      }),

    value: item,
  };
}
