import { describe, test, expect } from "vitest";
import { Time, Days, Hours, Minutes, Seconds } from "../time";

describe("Time utilities", () => {
  describe("Days", () => {
    test("converts days to other units", () => {
      const result = Days(2);
      expect(result).toEqual({
        value: 2,
        hours: 48,
        minutes: 2880,
        seconds: 172800,
        ms: 172800000,
      });
    });

    test("handles decimal days", () => {
      const result = Days(0.5);
      expect(result).toEqual({
        value: 0.5,
        hours: 12,
        minutes: 720,
        seconds: 43200,
        ms: 43200000,
      });
    });
  });

  describe("Hours", () => {
    test("converts hours to other units", () => {
      const result = Hours(2);
      expect(result).toEqual({
        value: 2,
        minutes: 120,
        seconds: 7200,
        ms: 7200000,
      });
    });

    test("handles negative hours", () => {
      const result = Hours(-1);
      expect(result).toEqual({
        value: -1,
        minutes: -60,
        seconds: -3600,
        ms: -3600000,
      });
    });
  });

  describe("Minutes", () => {
    test("converts minutes to other units", () => {
      const result = Minutes(30);
      expect(result).toEqual({
        value: 30,
        seconds: 1800,
        ms: 1800000,
      });
    });
  });

  describe("Seconds", () => {
    test("converts seconds to milliseconds", () => {
      const result = Seconds(10);
      expect(result).toEqual({
        value: 10,
        ms: 10000,
      });
    });
  });

  describe("Time object exports", () => {
    test("exports all time conversion functions", () => {
      expect(Time.Days(1)).toEqual(Days(1));
      expect(Time.Hours(1)).toEqual(Hours(1));
      expect(Time.Minutes(1)).toEqual(Minutes(1));
      expect(Time.Seconds(1)).toEqual(Seconds(1));
    });
  });
});
