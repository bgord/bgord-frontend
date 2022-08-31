import type { UseInfiniteQueryResult } from "react-query";
import type { Paged } from "@bgord/node";
export declare class Pagination {
    static empty: {
        result: never[];
        meta: {
            exhausted: boolean;
        };
    };
    static extract<T>(infinite: UseInfiniteQueryResult<Paged<T>>): T[];
}
export type { Paged } from "@bgord/node";
