import { describe, expect, test } from "vitest";
import { ThousandsSeparator } from "../thousands-separator";

describe("ThousandsSeparator", () => {
  test("formats numbers with default separator", () => {
    expect(ThousandsSeparator.format(1000)).toBe("1 000");
    expect(ThousandsSeparator.format(1000000)).toBe("1 000 000");
    expect(ThousandsSeparator.format(1234567)).toBe("1 234 567");
  });

  test("formats numbers with custom separator", () => {
    expect(ThousandsSeparator.format(1000, ",")).toBe("1,000");
    expect(ThousandsSeparator.format(1000000, ".")).toBe("1.000.000");
  });

  test("handles small numbers", () => {
    expect(ThousandsSeparator.format(0)).toBe("0");
    expect(ThousandsSeparator.format(999)).toBe("999");
    expect(ThousandsSeparator.format(100)).toBe("100");
  });

  test("handles negative numbers", () => {
    expect(ThousandsSeparator.format(-1000)).toBe("-1 000");
    expect(ThousandsSeparator.format(-1000000)).toBe("-1 000 000");
  });
});
