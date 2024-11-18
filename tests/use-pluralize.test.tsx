import { describe, expect, test, vi } from "vitest";
import { pluralize } from "../pluralize";

describe("pluralize", () => {
  describe("English pluralization", () => {
    test("returns singular form for value 1", () => {
      expect(pluralize({ value: 1, singular: "book", language: "en" })).toBe(
        "book",
      );
    });

    test("returns plural form for values other than 1", () => {
      expect(pluralize({ value: 2, singular: "book", language: "en" })).toBe(
        "books",
      );
      expect(pluralize({ value: 0, singular: "book", language: "en" })).toBe(
        "books",
      );
    });

    test("uses custom plural form if provided", () => {
      expect(
        pluralize({
          value: 2,
          singular: "child",
          plural: "children",
          language: "en",
        }),
      ).toBe("children");
    });
  });

  describe("Polish pluralization", () => {
    test("returns singular form for value 1", () => {
      expect(
        pluralize({
          value: 1,
          singular: "książka",
          plural: "książki",
          genitive: "książek",
          language: "pl",
        }),
      ).toBe("książka");
    });

    test("uses polish plurals for other values", () => {
      expect(
        pluralize({
          value: 2,
          singular: "książka",
          plural: "książki",
          genitive: "książek",
          language: "pl",
        }),
      ).toBe("książki");

      expect(
        pluralize({
          value: 5,
          singular: "książka",
          plural: "książki",
          genitive: "książek",
          language: "pl",
        }),
      ).toBe("książek");
    });
  });

  describe("unsupported languages", () => {
    test("returns singular form and logs warning", () => {
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      expect(
        pluralize({
          value: 2,
          singular: "libro",
          language: "es" as any,
        }),
      ).toBe("libro");

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining(
          "missing pluralization function for language es",
        ),
      );
    });
  });

  describe("falsy values", () => {
    test("handles null value", () => {
      expect(
        pluralize({
          value: null,
          singular: "book",
          language: "en",
        }),
      ).toBe("books");
    });

    test("handles undefined value", () => {
      expect(
        pluralize({
          value: undefined,
          singular: "book",
          language: "en",
        }),
      ).toBe("books");
    });

    test("handles 0 value", () => {
      expect(
        pluralize({
          value: 0,
          singular: "book",
          language: "en",
        }),
      ).toBe("books");
    });
  });
});
