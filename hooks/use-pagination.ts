import { useNewField } from "./use-new-field";
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
  const firstPage = 1;
  const previousPage = meta?.previousPage;
  const nextPage = meta?.nextPage;
  const lastPage = meta?.lastPage || firstPage;

  const page = useNewField({
    name: "page",
    defaultValue: String(meta?.currentPage ?? firstPage),
  });

  return {
    current: Number(page.value),
    last: lastPage,

    controls: {
      firstPage: {
        active: !previousPage,
        disabled: false,
        exists: true,
        go: () => page.set(String(firstPage)),
        value: firstPage,
      },

      previousPage: {
        active: false,
        disabled: !previousPage,
        exists: Boolean(previousPage),
        go: () => page.set(String(previousPage ?? page.value)),
        value: previousPage,
      },

      nextPage: {
        active: false,
        disabled: !nextPage,
        exists: Boolean(nextPage),
        go: () => page.set(String(nextPage ?? page.value)),
        value: nextPage,
      },

      lastPage: {
        active: Number(page.value) === lastPage,
        disabled: !nextPage,
        exists: true,
        go: () => page.set(String(lastPage ?? page.value)),
        value: lastPage,
      },
    },
  };
}
