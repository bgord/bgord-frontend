import { useState } from "react";

export type UseSearchQueryType = string;

export type UseSearchReturnType = {
  query: UseSearchQueryType;
  clear: VoidFunction;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterFn: (value: string) => boolean;
};

export function useSearch(): UseSearchReturnType {
  const emptyQuery: UseSearchQueryType = "";

  const [query, setValue] = useState<UseSearchQueryType>(emptyQuery);

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

  return { query, clear, onChange, filterFn };
}
