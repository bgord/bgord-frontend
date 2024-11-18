import { describe, expect, test } from "vitest";
import { Sorts } from "../sorts";

describe("Sorts", () => {
  describe("updatedAt sorts", () => {
    const items = [{ updatedAt: { raw: 1000 } }, { updatedAt: { raw: 2000 } }];

    test("most recent first", () => {
      const sorted = items.toSorted(Sorts.updatedAtMostRecent);
      expect(sorted[0]?.updatedAt.raw).toEqual(2000);
      expect(sorted[1]?.updatedAt.raw).toEqual(1000);
    });

    test("least recent first", () => {
      const sorted = items.toSorted(Sorts.updatedAtLeastRecent);
      expect(sorted[0]?.updatedAt.raw).toEqual(1000);
      expect(sorted[1]?.updatedAt.raw).toEqual(2000);
    });
  });

  describe("createdAt sorts", () => {
    const items = [{ createdAt: { raw: 1000 } }, { createdAt: { raw: 2000 } }];

    test("most recent first", () => {
      const sorted = items.toSorted(Sorts.createdAtMostRecent);
      expect(sorted[0]?.createdAt.raw).toBe(2000);
      expect(sorted[1]?.createdAt.raw).toBe(1000);
    });

    test("least recent first", () => {
      const sorted = items.toSorted(Sorts.createdAtLeastRecent);
      expect(sorted[0]?.createdAt.raw).toBe(1000);
      expect(sorted[1]?.createdAt.raw).toBe(2000);
    });
  });

  describe("string sorts", () => {
    const items = ["banana", "apple", "cherry"];

    test("A to Z", () => {
      const sorted = items.toSorted(Sorts.aToZ);
      expect(sorted).toEqual(["apple", "banana", "cherry"]);
    });

    test("Z to A", () => {
      const sorted = items.toSorted(Sorts.zToA);
      expect(sorted).toEqual(["cherry", "banana", "apple"]);
    });
  });

  describe("numeric sorts", () => {
    test("ascending", () => {
      expect(Sorts.ascending(1, 2)).toBe(-1);
      expect(Sorts.ascending(2, 1)).toBe(1);
      expect(Sorts.ascending(1, 1)).toBe(0);
    });

    test("descending", () => {
      expect(Sorts.descending(1, 2)).toBe(1);
      expect(Sorts.descending(2, 1)).toBe(-1);
      expect(Sorts.descending(1, 1)).toBe(0);
    });
  });
});
