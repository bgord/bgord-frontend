import { describe, expect, test } from "vitest";
import { Approximation, MinMaxScaler } from "../min-max-scaler";

describe("Approximation", () => {
  test("rounds to specified decimal places", () => {
    expect(Approximation.float(Math.PI)).toBe(3.14);

    // biome-ignore lint: lint/suspicious/noApproximativeNumericConstant
    expect(Approximation.float(Math.PI, 3)).toBe(3.142);
    expect(Approximation.float(Math.PI, 0)).toBe(3);
  });
});

describe("MinMaxScaler", () => {
  describe("constructor", () => {
    test("initializes with valid config", () => {
      expect(() => new MinMaxScaler({ min: 0, max: 100 })).not.toThrow();
      expect(
        () =>
          new MinMaxScaler({
            min: 0,
            max: 100,
            bound: { lower: 0, upper: 1 },
          })
      ).not.toThrow();
    });

    test("throws error for invalid min-max", () => {
      expect(() => new MinMaxScaler({ min: 100, max: 0 })).toThrow(
        "Invalid MinMaxScaler min-max config"
      );
    });

    test("throws error for invalid bounds", () => {
      expect(
        () =>
          new MinMaxScaler({
            min: 0,
            max: 100,
            bound: { lower: 1, upper: 0 },
          })
      ).toThrow("Invalid MinMaxScaler bound config");
    });
  });

  describe("scale", () => {
    const scaler = new MinMaxScaler({ min: 0, max: 100 });

    test("scales values correctly", () => {
      expect(scaler.scale(50)).toEqual({
        original: 50,
        scaled: 0.5,
        isMin: false,
        isMax: false,
      });
    });

    test("handles min/max values", () => {
      expect(scaler.scale(0).isMin).toBe(true);
      expect(scaler.scale(100).isMax).toBe(true);
    });

    test("throws for out of range values", () => {
      expect(() => scaler.scale(-1)).toThrow("Value out of min/max range");
      expect(() => scaler.scale(101)).toThrow("Value out of min/max range");
    });

    test("handles equal min/max", () => {
      const equalScaler = new MinMaxScaler({ min: 50, max: 50 });
      expect(equalScaler.scale(50)).toEqual({
        original: 50,
        scaled: 0.5,
        isMin: true,
        isMax: true,
      });
    });
  });

  describe("descale", () => {
    const scaler = new MinMaxScaler({ min: 0, max: 100 });

    test("descales values correctly", () => {
      expect(scaler.descale(0.5)).toEqual({
        original: 50,
        scaled: 0.5,
        isLowerBound: false,
        isUpperBound: false,
      });
    });

    test("handles bound values", () => {
      expect(scaler.descale(0).isLowerBound).toBe(true);
      expect(scaler.descale(1).isUpperBound).toBe(true);
    });

    test("throws for out of bounds values", () => {
      expect(() => scaler.descale(-0.1)).toThrow("Scaled value out of bounds");
      expect(() => scaler.descale(1.1)).toThrow("Scaled value out of bounds");
    });
  });

  describe("getMinMax", () => {
    test("returns correct min and max", () => {
      expect(MinMaxScaler.getMinMax([1, 5, 3, 2, 4])).toEqual({
        min: 1,
        max: 5,
      });
    });

    test("throws for empty array", () => {
      expect(() => MinMaxScaler.getMinMax([])).toThrow(
        "An empty array supplied"
      );
    });
  });
});
