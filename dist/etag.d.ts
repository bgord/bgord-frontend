import type { Schema } from "@bgord/node";
export declare class ETag {
    static fromRevision(revision: Schema.RevisionType): {
        "if-match": string;
    };
}
export type WeakETagValueType = string;
export declare class WeakETag {
    static fromRevision(revision: Schema.RevisionType): {
        "if-match": string;
    };
}
