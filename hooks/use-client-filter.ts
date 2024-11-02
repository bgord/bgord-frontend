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
  givenQuery?: UseClientFilterQueryType;
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
  options: { name: string; value: UseClientFilterConfigType<T>["enum"][0] }[];
  onUpdate: UseClientFilterConfigType<T>["onUpdate"];
  name: UseClientFilterConfigType<T>["name"];
  changed: boolean;
  unchanged: boolean;
  label: { props: { htmlFor: UseClientFilterNameType } };
  input: {
    props: { id: UseClientFilterNameType; name: UseClientFilterNameType };
  };
};

type QueryValueType = string | undefined;

export class QueryValue {
  private value: QueryValueType;

  constructor(value: QueryValueType) {
    this.value = QueryValue.isEmpty(value) ? undefined : value;
  }

  static isEmpty(value: QueryValueType): boolean {
    return value === undefined || value === "";
  }

  isEmpty(): boolean {
    return this.value === undefined || this.value === "";
  }

  get() {
    return this.value;
  }

  equals(another: QueryValue): boolean {
    return this.get() === another.get();
  }
}

export function useClientFilter<T = string>(
  config: UseClientFilterConfigType<T>,
): UseClientFilterReturnType<T> {
  const defaultQuery = new QueryValue(config.defaultQuery);
  const givenQuery = new QueryValue(config.givenQuery);

  const [query, setQuery] = useState(
    givenQuery.isEmpty() ? defaultQuery : givenQuery,
  );

  const filterFn = config.filterFn ?? defaultFilterFn;
  const options = Object.entries(config.enum).map(([name, value]) => ({
    name,
    value,
  }));
  const onUpdate = config?.onUpdate ?? noop;

  const previousQuery = usePreviousValue(query);

  function clear() {
    setQuery(defaultQuery);
  }

  function onChange(event: React.ChangeEvent<HTMLElementType>) {
    setQuery(new QueryValue(event.currentTarget.value));
  }

  function defaultFilterFn(given: T) {
    const value = new QueryValue(String(given));

    if (query.isEmpty()) return true;
    return query.equals(value);
  }

  useEffect(
    () => onUpdate(query.get(), previousQuery?.get()),
    [previousQuery?.get(), query.get()],
  );

  return {
    query: query.get(),
    clear,
    onChange,
    filterFn,
    options,
    onUpdate,
    name: config.name,
    changed: !query.equals(defaultQuery),
    unchanged: query.equals(defaultQuery),
    label: { props: { htmlFor: config.name } },
    input: { props: { id: config.name, name: config.name } },
  };
}
