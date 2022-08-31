import type { UseInfiniteQueryResult } from "react-query";
import type { Paged } from "@bgord/node";

export class Pagination {
  static empty = { result: [], meta: { exhausted: true } };

  static prepare<T>(infinite: UseInfiniteQueryResult<Paged<T>>): T[] {
    return (
      infinite.data?.pages
        ?.flat()
        .map((data) => data.result)
        .flat() ?? []
    );
  }
}

export type { Paged } from "@bgord/node";
