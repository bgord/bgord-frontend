import { useState } from "react";

export type UseClientSearchQueryType = string;

export type UseClientSearchReturnType = {
  query: UseClientSearchQueryType;
  clear: VoidFunction;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterFn: (value: string) => boolean;
  changed: boolean;
  unchanged: boolean;
};

export function useClientSearch(): UseClientSearchReturnType {
  const emptyQuery: UseClientSearchQueryType = "";

  const [query, setValue] = useState<UseClientSearchQueryType>(emptyQuery);

  function clear() {
    setValue(emptyQuery);
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  function filterFn(value: string) {
    if (query === emptyQuery) return true;

    return value?.toLowerCase().includes(query.toLowerCase());
  }

  return {
    query,
    clear,
    onChange,
    filterFn,
    changed: query !== emptyQuery,
    unchanged: query === emptyQuery,
  };
}
