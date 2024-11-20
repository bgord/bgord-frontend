import { useCallback, useMemo, useState } from "react";

type UseItemValueType<T> = T | null;

type UseItemReturnType<T> = {
  clear: VoidFunction;
  set: (item: NonNullable<UseItemValueType<T>>) => void;
  toggle: (item: NonNullable<UseItemValueType<T>>) => void;
  value: UseItemValueType<T>;
  isDefault: boolean;
  exists: boolean;
  compare: (a: UseItemValueType<T>) => boolean;
};

type UseItemConfigType<T> = {
  defaultItem?: UseItemValueType<T>;
  comparisonFn?: (a: UseItemValueType<T>, b: UseItemValueType<T>) => boolean;
};

/**
 * Hook for managing a single item with comparison and toggle functionality
 *
 * @example
 * ```tsx
 * function TabSelector() {
 *   const activeTab = useItem<string>({ defaultItem: "home" });
 *
 *   return (
 *     <div>
 *       <button onClick={() => activeTab.toggle("home")}>
 *         Home {activeTab.compare("home") ? "(active)" : ""}
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useItem<T>(
  config?: UseItemConfigType<T>,
): UseItemReturnType<T> {
  const defaultItem = null;
  const comparisonFn = config?.comparisonFn ?? defaultComparisonFn;
  const [item, setItem] = useState<UseItemValueType<T>>(
    config?.defaultItem ?? defaultItem,
  );

  const clear = useCallback(() => setItem(defaultItem), []);

  const set = useCallback(
    (newer: NonNullable<UseItemValueType<T>>) => setItem(newer),
    [],
  );

  const toggle = useCallback(
    (newer: NonNullable<UseItemValueType<T>>) => {
      setItem((current) => {
        if (current === defaultItem) return newer;
        return comparisonFn(current, newer) ? defaultItem : newer;
      });
    },
    [comparisonFn],
  );

  const compare = useCallback(
    (given: UseItemValueType<T>) => comparisonFn(item, given),
    [item, comparisonFn],
  );

  return useMemo(
    () => ({
      clear,
      set,
      toggle,
      value: item,
      isDefault: comparisonFn(item, defaultItem),
      exists: !comparisonFn(item, defaultItem),
      compare,
    }),
    [clear, set, toggle, item, comparisonFn, compare],
  );
}

function defaultComparisonFn<T>(
  a: UseItemValueType<T>,
  b: UseItemValueType<T>,
) {
  return a === b;
}
