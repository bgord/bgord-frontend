import { describe, expect, test } from "vitest";
import { DurationFormatter } from "../durations";

describe("DurationFormatter", () => {
  test("formats whole minutes correctly", () => {
    expect(DurationFormatter.format(60)).toBe("01:00");
    expect(DurationFormatter.format(120)).toBe("02:00");
  });

  test("formats seconds correctly", () => {
    expect(DurationFormatter.format(45)).toBe("00:45");
    expect(DurationFormatter.format(5)).toBe("00:05");
  });

  test("formats minutes and seconds correctly", () => {
    expect(DurationFormatter.format(90)).toBe("01:30");
    expect(DurationFormatter.format(185)).toBe("03:05");
  });

  test("handles zero duration", () => {
    expect(DurationFormatter.format(0)).toBe("00:00");
  });

  test("pads single digits correctly", () => {
    expect(DurationFormatter.format(61)).toBe("01:01");
    expect(DurationFormatter.format(9)).toBe("00:09");
  });

  test("handles large durations", () => {
    expect(DurationFormatter.format(3600)).toBe("60:00");
    expect(DurationFormatter.format(3665)).toBe("61:05");
  });
});
