import { useEffect } from "react";
import * as rrd from "react-router-dom";
import { useField } from "./use-field";
import type { Paged, PageType } from "@bgord/node";

export type { Paged, PageType } from "@bgord/node";

type PagedMetaType = Paged<unknown>["meta"];

type UsePaginationControlType = {
  active: boolean;
  disabled: boolean;
  exists: boolean;
  go: VoidFunction;
  value: PageType | undefined;
};

type UsePaginationReturnType = {
  current: PageType;
  last: PageType;

  controls: {
    firstPage: UsePaginationControlType;
    previousPage: UsePaginationControlType;
    nextPage: UsePaginationControlType;
    lastPage: UsePaginationControlType;
  };
};

export function usePagination(
  meta: PagedMetaType | null
): UsePaginationReturnType {
  const [searchParams, setSearchParams] = rrd.useSearchParams();

  const firstPage = 1;
  const previousPage = meta?.previousPage;
  const nextPage = meta?.nextPage;
  const lastPage = meta?.lastPage || firstPage;

  const page = useField("page", meta?.currentPage ?? firstPage);

  useEffect(() => {
    searchParams.set("page", String(page.value));
    setSearchParams(searchParams);
  }, [page.value]);

  return {
    current: page.value,
    last: lastPage,

    controls: {
      firstPage: {
        active: !previousPage,
        disabled: false,
        exists: true,
        go: () => page.set(firstPage),
        value: firstPage,
      },

      previousPage: {
        active: false,
        disabled: !previousPage,
        exists: Boolean(previousPage),
        go: () => page.set(previousPage ?? page.value),
        value: previousPage,
      },

      nextPage: {
        active: false,
        disabled: !nextPage,
        exists: Boolean(nextPage),
        go: () => page.set(nextPage ?? page.value),
        value: nextPage,
      },

      lastPage: {
        active: page.value === lastPage,
        disabled: !nextPage,
        exists: true,
        go: () => page.set(lastPage ?? page.value),
        value: lastPage,
      },
    },
  };
}
