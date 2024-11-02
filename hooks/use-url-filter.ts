import { useSearchParams } from "react-router-dom";
import {
  useClientFilter,
  UseClientFilterConfigType,
  UseClientFilterReturnType,
  QueryValue,
} from "./use-client-filter";
import { getSafeWindow } from "../safe-window";

export type UseUrlFilterConfigType<T> = UseClientFilterConfigType<T>;

export function useUrlFilter<T>(
  config: UseUrlFilterConfigType<T>,
): UseClientFilterReturnType<T> {
  const safeWindow = getSafeWindow();

  const [params, setParams] = useSearchParams();

  const givenQuery = new QueryValue(params.get(config.name) ?? undefined);

  return useClientFilter({
    onUpdate: (_current, _previous) => {
      if (!safeWindow) return;

      const current = new QueryValue(_current);
      const previous = new QueryValue(_previous);

      if (current.isEmpty()) params.delete(config.name);
      else params.set(config.name, String(current.get()));

      if (!current.equals(previous)) setParams(params);
    },
    ...config,
    defaultQuery: config.defaultQuery,
    givenQuery: givenQuery.get(),
  });
}
