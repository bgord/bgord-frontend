import { useSearchParams } from "react-router-dom";
import {
  useClientFilter,
  UseClientFilterConfigType,
  UseClientFilterReturnType,
} from "./use-client-filter";
import { getSafeWindow } from "../safe-window";

export type UseUrlFilterConfigType<T> = UseClientFilterConfigType<T>;

export function useUrlFilter<T>(
  config: UseUrlFilterConfigType<T>,
): UseClientFilterReturnType<T> {
  const safeWindow = getSafeWindow();

  const [_searchParams, setSearchParams] = useSearchParams();

  const currentQuery =
    new URLSearchParams(safeWindow?.location.search).get(config.name) ??
    undefined;

  return useClientFilter({
    onUpdate: (current, previous) => {
      if (!safeWindow) return;

      const url = new URL(safeWindow.location.toString());
      const params = new URLSearchParams(url.search);

      if (current === undefined) {
        params.delete(config.name);
      } else {
        params.set(config.name, current);
      }

      if (current === previous) return;

      if (current !== previous) {
        // url.search = params.toString();
        // history.pushState({}, "", url.toString());
        setSearchParams(params);
      }
    },
    ...config,
    defaultQuery: config.defaultQuery,
    currentQuery: currentQuery,
  });
}
