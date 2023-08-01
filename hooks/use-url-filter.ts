import {
  useFilter,
  UseFilterConfigType,
  UseFilterReturnType,
} from "./use-filter";
import { getSafeWindow } from "../safe-window";

export type UseUrlFilterConfigType<T> = UseFilterConfigType<T>;

export function useUrlFilter<T>(
  config: UseUrlFilterConfigType<T>
): UseFilterReturnType<T> {
  const safeWindow = getSafeWindow();

  const currentQuery =
    new URLSearchParams(safeWindow?.location.search).get(config.name) ??
    undefined;

  return useFilter({
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
        url.search = params.toString();
        history.pushState({}, "", url.toString());
      }
    },
    ...config,
    defaultQuery: config.defaultQuery,
    currentQuery: currentQuery,
  });
}
