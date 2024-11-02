import { useState, useEffect } from "react";
import { HTMLElementType } from "./use-field";
import { usePreviousValue } from "./use-previous-value";
import { noop } from "../noop";

export type UseClientFilterQueryType = string | undefined;
export type UseClientFilterNameType = string;

export type UseClientFilterConfigType<T> = {
  name: string;
  enum: { [key: string]: UseClientFilterQueryType };
  defaultQuery?: UseClientFilterQueryType;
  currentQuery?: UseClientFilterQueryType;
  filterFn?: (value: T) => boolean;
  onUpdate?: (
    current: UseClientFilterQueryType,
    previous: UseClientFilterQueryType,
  ) => void;
};

export type UseClientFilterReturnType<T> = {
  query: UseClientFilterQueryType;
  clear: VoidFunction;
  onChange: (event: React.ChangeEvent<HTMLElementType>) => void;
  filterFn: NonNullable<UseClientFilterConfigType<T>["filterFn"]>;
  options: UseClientFilterConfigType<T>["enum"][0][];
  onUpdate: UseClientFilterConfigType<T>["onUpdate"];
  name: UseClientFilterConfigType<T>["name"];
  changed: boolean;
  unchanged: boolean;
  label: { props: { htmlFor: UseClientFilterNameType } };
  input: {
    props: { id: UseClientFilterNameType; name: UseClientFilterNameType };
  };
};

export function useClientFilter<T = string>(
  config: UseClientFilterConfigType<T>,
): UseClientFilterReturnType<T> {
  const defaultQuery = config.defaultQuery ?? undefined;
  const currentQuery = config.currentQuery ?? undefined;

  const filterFn = config.filterFn ?? defaultFilterFn;
  const options = Object.keys(config.enum);
  const onUpdate = config?.onUpdate ?? noop;

  const [query, setQuery] = useState<UseClientFilterQueryType>(
    currentQuery ?? defaultQuery,
  );
  const previousQuery = usePreviousValue(query);

  function clear() {
    setQuery(defaultQuery);
  }

  function onChange(event: React.ChangeEvent<HTMLElementType>) {
    const newQuery = event.currentTarget.value;

    const isNewQueryInEnum = Boolean(config.enum[String(newQuery)]);

    setQuery(isNewQueryInEnum ? newQuery : undefined);
  }

  function defaultFilterFn(value: T) {
    if (query === undefined) return true;

    return query === String(value);
  }

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useEffect(() => onUpdate(query, previousQuery), [previousQuery, query]);

  return {
    query,
    clear,
    onChange,
    filterFn,
    options,
    onUpdate,
    name: config.name,
    changed: query !== defaultQuery,
    unchanged: query === defaultQuery,
    label: { props: { htmlFor: config.name } },
    input: { props: { id: config.name, name: config.name } },
  };
}
