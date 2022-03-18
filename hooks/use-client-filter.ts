import { useState } from "react";

export type UseFilterQueryType = string | undefined;

export type UseFilterConfigType<T> = {
  enum: { [key: string]: UseFilterQueryType };
  defaultQuery?: UseFilterQueryType;
  filterFn?: (value: T) => boolean;
};

export function useClientFilter<T = string>(config: UseFilterConfigType<T>) {
  const defaultQuery = config.defaultQuery ?? undefined;

  const [query, setQuery] = useState<UseFilterQueryType>(defaultQuery);

  function clear() {
    setQuery(defaultQuery);
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuery = event.currentTarget.value;

    const isNewQueryInEnum = Boolean(config.enum[String(newQuery)]);

    setQuery(isNewQueryInEnum ? newQuery : defaultQuery);
  }

  function filterFn(value: T) {
    if (query === undefined) return true;

    return query === String(value);
  }

  return {
    query,
    clear,
    onChange,
    filterFn: config.filterFn ?? filterFn,
    options: Object.keys(config.enum),
  };
}
