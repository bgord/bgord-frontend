import type { UseInfiniteQueryResult } from "react-query";
import type { Paged } from "@bgord/node";

export class Pagination {
  static empty = { result: [], meta: { exhausted: true } };

  static infinite<T>(infinite: UseInfiniteQueryResult<Paged<T>>): T[] {
    return (
      infinite.data?.pages
        ?.flat()
        .flatMap((data) => data.result) ?? []
    );
  }
}

export type { Paged, PageType } from "@bgord/node";

export type PagedMetaType = Paged<unknown>["meta"];
