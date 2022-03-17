import { useState } from "react";

export type UseFilterQueryType = string;

export type UseFilterConfigType<T> = {
  enum: { [key: string]: UseFilterQueryType };
  defaultQuery?: UseFilterQueryType;
  filterFn?: (value: T) => boolean;
};

export function useClientFilter<T = string>(config: UseFilterConfigType<T>) {
  const defaultQuery = config.defaultQuery ?? "all";

  const [query, setQuery] = useState<UseFilterQueryType>(defaultQuery);

  function clear() {
    setQuery(defaultQuery);
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuery = event.currentTarget.value;

    const isNewQueryInEnum = Boolean(config.enum[String(newQuery)]);

    if (newQuery === "all" || isNewQueryInEnum) setQuery(newQuery);
  }

  function filterFn(value: T) {
    if (query === "all") return true;

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
