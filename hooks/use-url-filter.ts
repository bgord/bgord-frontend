import { useFilter, UseFilterConfigType } from "./use-filter";
import { getSafeWindow } from "../safe-window";

export type UseUrlFilterConfigType<T> = UseFilterConfigType<T> & {
  label: string;
};

export function useUrlFilter<T>(config: UseUrlFilterConfigType<T>) {
  const safeWindow = getSafeWindow();

  const currentQuery =
    new URLSearchParams(safeWindow?.location.search).get(config.label) ??
    undefined;

  return useFilter({
    onUpdate: (current, previous) => {
      if (!safeWindow) return;

      const url = new URL(safeWindow.location.toString());
      const params = new URLSearchParams(url.search);

      if (current === undefined) {
        params.delete(config.label);
      } else {
        params.set(config.label, current);
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
