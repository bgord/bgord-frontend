import { describe, expect, test } from "vitest";
import { ETag, WeakETag, addWeakEtagRevision } from "../etag";

describe("ETag utilities", () => {
  describe("ETag", () => {
    test("creates correct if-match header from revision", () => {
      expect(ETag.fromRevision(123)).toEqual({ "if-match": "123" });
    });
  });

  describe("WeakETag", () => {
    test("creates correct weak if-match header from revision", () => {
      expect(WeakETag.fromRevision(123)).toEqual({ "if-match": "W/123" });
    });
  });

  describe("addWeakEtagRevision", () => {
    test("returns formatted weak etag string", () => {
      expect(addWeakEtagRevision(123)).toEqual("W/123");
    });
  });
});
