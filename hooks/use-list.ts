import { Dispatch, SetStateAction, useCallback, useMemo, useState } from "react";

type UseListActionsType<T> = {
  clear: VoidFunction;
  add: (x: T | T[]) => void;
  remove: (x: T) => void;
  toggle: (x: T) => void;
  isAdded: (x: T) => boolean;
  update: Dispatch<SetStateAction<T[]>>;
};

export type UseListReturnType<T> = [T[], UseListActionsType<T>];

type UseListConfigType<T> = {
  defaultItems?: T[];
  comparisonFn?: (a: T, b: T) => boolean;
};

/**
 * Hook for managing a list of items with various operations
 *
 * @example
 * ```tsx
 * function TagList() {
 *   const [tags, { add, remove, toggle }] = useList<string>();
 *
 *   return (
 *     <div>
 *       {tags.map(tag => (
 *         <Tag
 *           key={tag}
 *           onClick={() => toggle(tag)}
 *         >
 *           {tag}
 *         </Tag>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 */
export function useList<T>(config?: UseListConfigType<T>): UseListReturnType<T> {
  const defaultItems = config?.defaultItems ?? [];
  const defaultComparisonFn = (a: T, b: T) => a === b;
  const comparisonFn = config?.comparisonFn ?? defaultComparisonFn;

  const [items, setItems] = useState<T[]>(defaultItems);

  const clear = useCallback(() => setItems([]), []);

  const add = useCallback((payload: T | T[]) => {
    setItems((items) => (Array.isArray(payload) ? [...items, ...payload] : [...items, payload]));
  }, []);

  const remove = useCallback(
    (item: T) => setItems((items) => items.filter((x) => !comparisonFn(x, item))),
    [comparisonFn],
  );

  const isAdded = useCallback((item: T) => items.some((x) => comparisonFn(x, item)), [items, comparisonFn]);

  const toggle = useCallback(
    (item: T) => {
      setItems((currentItems) =>
        currentItems.some((x) => comparisonFn(x, item))
          ? currentItems.filter((x) => !comparisonFn(x, item))
          : [...currentItems, item],
      );
    },
    [comparisonFn],
  );

  const actions = useMemo(
    () => ({ clear, add, remove, toggle, isAdded, update: setItems }),
    [clear, add, remove, toggle, isAdded],
  );

  return [items, actions];
}
