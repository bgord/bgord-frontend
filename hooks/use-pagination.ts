import { useField } from "./use-field";
import { PagedMetaType } from "../pagination";

export function usePagination() {
  const meta = useField<PagedMetaType | null>("meta", null);

  const firstPage = 1;
  const previousPage = meta.value?.previousPage;
  const nextPage = meta.value?.nextPage;
  const lastPage = meta.value?.lastPage;

  const page = useField("page", firstPage);

  return {
    current: page.value,
    last: lastPage,

    buttons: {
      firstPage: {
        value: firstPage,
        exists: true,
        active: !previousPage,
        go: () => page.set(firstPage),
      },

      previousPage: {
        value: previousPage,
        exists: previousPage,
        disabled: !previousPage,
        go: () => page.set(previousPage ?? page.value),
      },

      nextPage: {
        value: nextPage,
        exists: nextPage,
        disabled: !nextPage,
        go: () => page.set(nextPage ?? page.value),
      },

      lastPage: {
        value: lastPage,
        exists: true,
        active: page.value === lastPage,
        disabled: !nextPage,
        go: () => page.set(lastPage ?? page.value),
      },
    },

    update: (updated: PagedMetaType | null) => meta.set(updated),
  };
}
