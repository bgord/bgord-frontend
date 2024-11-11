import type { Schema } from "@bgord/node";

export class ETag {
  static fromRevision(revision: Schema.RevisionType) {
    return { "if-match": String(revision) };
  }
}

export type WeakETagValueType = string;

export class WeakETag {
  static fromRevision(revision: Schema.RevisionType) {
    return { "if-match": `W/${revision}` };
  }
}

export function addWeakEtagRevision(revision: Schema.RevisionType) {
  return WeakETag.fromRevision(revision)["if-match"];
}
