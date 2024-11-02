import { useState, SetStateAction, Dispatch } from "react";

export type UseListActionsType<T> = {
  clear: VoidFunction;
  add: (x: T | T[]) => void;
  remove: (x: T) => void;
  toggle: (x: T) => void;
  isAdded: (x: T) => boolean;
  update: Dispatch<SetStateAction<T[]>>;
};

export type UseListReturnType<T> = [T[], UseListActionsType<T>];

export type UseListConfigType<T> = {
  defaultItems?: T[];
  comparisonFn?: (a: T, b: T) => boolean;
};

export function useList<T>(
  config?: UseListConfigType<T>,
): UseListReturnType<T> {
  const defaultItems = config?.defaultItems ?? [];

  const defaultComparisonFn = (a: T, b: T) => a === b;
  const comparisonFn = config?.comparisonFn ?? defaultComparisonFn;

  const [items, setItems] = useState<T[]>(defaultItems);

  function clear() {
    setItems([]);
  }

  function add(payload: T | T[]) {
    setItems((items) => {
      if (Array.isArray(payload)) {
        return [...items, ...payload];
      }
      return [...items, payload];
    });
  }

  function remove(item: T) {
    setItems((items) => items.filter((x) => !comparisonFn(x, item)));
  }

  function isAdded(item: T) {
    return items.some((x) => comparisonFn(x, item));
  }

  function toggle(item: T) {
    isAdded(item) ? remove(item) : add(item);
  }

  return [items, { clear, add, remove, toggle, isAdded, update: setItems }];
}
