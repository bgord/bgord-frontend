import { useState, useEffect } from "react";
import { usePreviousValue } from "./use-previous-value";
import { noop } from "../noop";

export type UseFilterQueryType = string | undefined;

export type UseFilterConfigType<T> = {
  label: string;
  enum: { [key: string]: UseFilterQueryType };
  defaultQuery?: UseFilterQueryType;
  currentQuery?: UseFilterQueryType;
  filterFn?: (value: T) => boolean;
  onUpdate?: (
    current: UseFilterQueryType,
    previous: UseFilterQueryType
  ) => void;
};

export type UseFilterReturnType<T> = {
  query: UseFilterQueryType;
  clear: VoidFunction;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterFn: UseFilterConfigType<T>["filterFn"];
  options: UseFilterConfigType<T>["enum"][0][];
  onUpdate: UseFilterConfigType<T>["onUpdate"];
  label: UseFilterConfigType<T>["label"];
  changed: boolean;
  unchanged: boolean;
};

export function useFilter<T = string>(
  config: UseFilterConfigType<T>
): UseFilterReturnType<T> {
  const defaultQuery = config.defaultQuery ?? undefined;
  const currentQuery = config.currentQuery ?? undefined;

  const filterFn = config.filterFn ?? defaultFilterFn;
  const options = Object.keys(config.enum);
  const onUpdate = config?.onUpdate ?? noop;

  const [query, setQuery] = useState<UseFilterQueryType>(
    currentQuery ?? defaultQuery
  );
  const previousQuery = usePreviousValue(query);

  function clear() {
    setQuery(defaultQuery);
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuery = event.currentTarget.value;

    const isNewQueryInEnum = Boolean(config.enum[String(newQuery)]);

    setQuery(isNewQueryInEnum ? newQuery : undefined);
  }

  function defaultFilterFn(value: T) {
    if (query === undefined) return true;

    return query === String(value);
  }

  useEffect(() => {
    onUpdate(query, previousQuery);
  }, [previousQuery, query]);

  return {
    query,
    clear,
    onChange,
    filterFn,
    options,
    onUpdate,
    label: config.label,
    changed: query !== defaultQuery,
    unchanged: query === defaultQuery,
  };
}
