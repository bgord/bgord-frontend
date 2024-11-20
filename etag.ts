/**
 * ETag utilities for HTTP request headers
 * @module ETag
 */
import type { Schema } from "@bgord/node";

/**
 * Strong ETag implementation
 */
export class ETag {
  /**
   * Creates strong ETag header from revision
   * @param revision - Document revision number
   * @returns Object with if-match header
   */
  static fromRevision(revision: Schema.RevisionType) {
    return { "if-match": String(revision) };
  }
}

export type WeakETagValueType = string;

/**
 * Weak ETag implementation per RFC 7232
 * @see https://tools.ietf.org/html/rfc7232#section-2.3
 */
export class WeakETag {
  /**
   * Creates weak ETag header from revision
   * @param revision - Document revision number
   * @returns Object with if-match header containing W/ prefix
   */
  static fromRevision(revision: Schema.RevisionType) {
    return { "if-match": `W/${revision}` };
  }
}

/**
 * Helper to generate weak ETag value
 * @param revision - Document revision number
 * @returns Formatted weak ETag string
 */
export function addWeakEtagRevision(revision: Schema.RevisionType) {
  return WeakETag.fromRevision(revision)["if-match"];
}
