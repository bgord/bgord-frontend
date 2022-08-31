export type { Paged } from "@bgord/node";

export class Pagination {
  static empty = { result: [], meta: { exhausted: true } };
}
