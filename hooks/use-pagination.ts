import type { PageType, Paged } from "@bgord/node";
import { useField, useFieldStrategyEnum } from "./use-field";
import { useMemo, useCallback } from "react";

export type { Paged, PageType } from "@bgord/node";
export type PagedMetaType = Paged<unknown>["meta"];

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

/**
 * Hook for managing pagination state and controls
 *
 * @example
 * ```tsx
 * function PaginatedList() {
 *   const pagination = usePagination(data.meta);
 *
 *   return (
 *     <>
 *       <button
 *         onClick={pagination.controls.previousPage.go}
 *         disabled={pagination.controls.previousPage.disabled}
 *       >
 *         Previous
 *       </button>
 *       Page {pagination.current} of {pagination.last}
 *     </>
 *   );
 * }
 * ```
 */
export function usePagination(
  meta: PagedMetaType | null
): UsePaginationReturnType {
  const firstPage = 1;
  const previousPage = meta?.previousPage;
  const nextPage = meta?.nextPage;
  const lastPage = meta?.lastPage || firstPage;

  const page = useField<PageType>({
    name: "page",
    defaultValue: meta?.currentPage ?? firstPage,
    strategy: useFieldStrategyEnum.params,
  });

  const createControl = useCallback(
    (
      value: PageType | undefined,
      isActive: boolean,
      isDisabled: boolean,
      exists: boolean
    ): UsePaginationControlType => ({
      active: isActive,
      disabled: isDisabled,
      exists,
      go: () => page.set(value ?? page.value),
      value,
    }),
    [page]
  );

  return useMemo(
    () => ({
      current: Number(page.value),
      last: lastPage,
      controls: {
        firstPage: createControl(firstPage, !previousPage, false, true),
        previousPage: createControl(
          previousPage,
          false,
          !previousPage,
          Boolean(previousPage)
        ),
        nextPage: createControl(nextPage, false, !nextPage, Boolean(nextPage)),
        lastPage: createControl(
          lastPage,
          Number(page.value) === lastPage,
          !nextPage,
          true
        ),
      },
    }),
    [page.value, lastPage, previousPage, nextPage, createControl]
  );
}

export function extractPage(url: URL): PageType {
  const searchParams = url.searchParams;
  return Number(searchParams.get("page")) || 1;
}
