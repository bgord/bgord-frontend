import type { UseInfiniteQueryResult } from "react-query";
import type { Paged } from "@bgord/node";
export declare class Pagination {
    static empty: {
        result: never[];
        meta: {
            exhausted: boolean;
        };
    };
    static infinite<T>(infinite: UseInfiniteQueryResult<Paged<T>>): T[];
}
export type { Paged, PageType } from "@bgord/node";
export type PagedMetaType = Paged<unknown>["meta"];
