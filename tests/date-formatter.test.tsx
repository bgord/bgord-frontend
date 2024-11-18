import { beforeEach, describe, expect, test, vi } from "vitest";
import { DateFormatter, HourFormatter } from "../date-formatter";

describe("DateFormatter", () => {
  const timestamp = new Date("2024-01-15T14:30:45").getTime();
  const date = new Date(timestamp);

  test("datetime formats date correctly", () => {
    expect(DateFormatter.datetime(timestamp)).toBe(
      new Date(timestamp).toLocaleString(),
    );
    expect(DateFormatter.datetime(null)).toBe("N/A");
    expect(DateFormatter.datetime(undefined, "Custom Default")).toBe(
      "Custom Default",
    );
  });

  test("monthDay formats correctly", () => {
    expect(DateFormatter.monthDay(timestamp)).toBe("15/01");
  });

  test("form formats correctly", () => {
    expect(DateFormatter.form(date)).toBe("2024-01-15");
    expect(DateFormatter.form(null)).toMatch(/^\d{4}-\d{2}-\d{2}$/); // Today's date
  });

  test("clockUTC formats correctly", () => {
    expect(DateFormatter.clockUTC(timestamp)).toBe("14:30:45");
  });

  test("clockLocal formats correctly", () => {
    const localDate = new Date(timestamp);
    const expected = `${String(localDate.getHours()).padStart(2, "0")}:${String(
      localDate.getMinutes(),
    ).padStart(2, "0")}:${String(localDate.getSeconds()).padStart(2, "0")}`;
    expect(DateFormatter.clockLocal(timestamp)).toBe(expected);
  });

  test("countdown formats correctly", () => {
    expect(DateFormatter.countdown(timestamp)).toMatch(/^\d{2}:\d{2}:\d{2}$/);
  });

  test("formDatetimeLocal formats correctly", () => {
    const result = DateFormatter.formDatetimeLocal(timestamp);
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/);
  });

  test("_padDatePart pads single digits", () => {
    expect(DateFormatter._padDatePart(5)).toBe("05");
    expect(DateFormatter._padDatePart(10)).toBe("10");
  });
});

describe("HourFormatter", () => {
  let timezoneOffset: number;

  beforeEach(() => {
    // Mock timezone offset for consistent testing
    timezoneOffset = -120; // Example: UTC+2
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(
      timezoneOffset,
    );
  });

  test("convertUtcToLocal converts hours correctly", () => {
    const result = HourFormatter.convertUtcToLocal(14);
    expect(result.value).toBe(16); // 14:00 UTC -> 16:00 Local
    expect(result.label).toBe("16:00");
  });

  test("handles day wraparound", () => {
    const result = HourFormatter.convertUtcToLocal(23);
    expect(result.value).toBe(1); // 23:00 UTC -> 01:00 Local
    expect(result.label).toBe("01:00");
  });
});
