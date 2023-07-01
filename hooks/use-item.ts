import { useState } from "react";

type UseItemValueType<T> = T | null;

export type UseItemReturnType<T> = {
  clear: VoidFunction;
  set: (item: NonNullable<UseItemValueType<T>>) => void;
  toggle: (item: NonNullable<UseItemValueType<T>>) => any;
  value: UseItemValueType<T>;
  isDefault: boolean;
  exists: boolean;
  compare: (a: UseItemValueType<T>) => boolean;
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

const defaultItem = null;

export function useItem<T>(
  config?: UseItemConfigType<T>
): UseItemReturnType<T> {
  const comparisonFn = config?.comparisonFn ?? defaultComparisonFn;

  const [item, setItem] = useState<UseItemValueType<T>>(
    config?.defaultItem ?? defaultItem
  );

  return {
    clear: () => setItem(defaultItem),

    set: (newer) => setItem(newer),

    toggle: (newer) =>
      setItem((current) => {
        if (current === defaultItem) return newer;

        return comparisonFn(current, newer) ? defaultItem : newer;
      }),

    value: item,

    isDefault: comparisonFn(item, defaultItem),

    exists: !comparisonFn(item, defaultItem),

    compare: (given: UseItemValueType<T>) => comparisonFn(item, given),
  };
}
