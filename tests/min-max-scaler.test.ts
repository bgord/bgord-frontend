import { test, expect, describe } from "vitest";

import { MinMaxScaler } from "../min-max-scaler";

describe("MinMaxScaler", () => {
  describe("scale", () => {
    test("should scale a value within the configured range", () => {
      const config = { min: 0, max: 100, bound: { lower: 10, upper: 20 } };
      const scaler = new MinMaxScaler(config);

      const original = 50;
      const scaled = 15;

      const result = scaler.scale(original);

      expect(result).eql({ original, scaled, isMin: false, isMax: false });

      expect(scaler.descale(result.scaled)).toEqual({
        isLowerBound: false,
        isUpperBound: false,
        original,
        scaled,
      });
    });

    test("should scale a value within the configured range up to 2 decimal places", () => {
      const config = { min: 0, max: 27, bound: { lower: 0, upper: 9 } };
      const scaler = new MinMaxScaler(config);

      const original = 5;
      const scaled = 1.67;

      const result = scaler.scale(original);

      expect(result).eql({ scaled, original, isMin: false, isMax: false });

      expect(scaler.descale(result.scaled)).toEqual({
        isLowerBound: false,
        isUpperBound: false,
        original: 5.01,
        scaled,
      });
    });

    test("should scale a value with default range", () => {
      const config = { min: 0, max: 100 };
      const scaler = new MinMaxScaler(config);

      const original = 50;
      const scaled = 0.5;

      const result = scaler.scale(original);

      expect(result).eql({ scaled, original, isMin: false, isMax: false });

      expect(scaler.descale(result.scaled)).toEqual({
        isLowerBound: false,
        isUpperBound: false,
        original,
        scaled,
      });
    });

    test("should handle the minimum value", () => {
      const config = { min: 0, max: 100, bound: { lower: 10, upper: 20 } };
      const scaler = new MinMaxScaler(config);

      const original = 0;
      const scaled = 10;

      const result = scaler.scale(original);

      expect(result).eql({ scaled, original, isMin: true, isMax: false });

      expect(scaler.descale(result.scaled)).toEqual({
        isLowerBound: true,
        isUpperBound: false,
        original,
        scaled,
      });
    });

    test("should handle the maximum value", () => {
      const config = { min: 0, max: 100, bound: { lower: 10, upper: 20 } };
      const scaler = new MinMaxScaler(config);

      const original = 100;
      const scaled = 20;

      const result = scaler.scale(original);

      expect(result).eql({ scaled, original, isMin: false, isMax: true });

      expect(scaler.descale(result.scaled)).toEqual({
        isLowerBound: false,
        isUpperBound: true,
        original,
        scaled,
      });
    });

    test("should handle min=max case", () => {
      const config = { min: 100, max: 100, bound: { lower: 10, upper: 20 } };
      const scaler = new MinMaxScaler(config);

      const original = 100;
      const scaled = 15;

      const result = scaler.scale(original);

      expect(result).eql({ scaled, original, isMin: true, isMax: true });

      expect(scaler.descale(result.scaled)).toEqual({
        isLowerBound: false,
        isUpperBound: false,
        original,
        scaled,
      });
    });

    test("should throw an error for an invalid min/max config", () => {
      const config = { min: 100, max: 0, bound: { lower: 0, upper: 10 } };
      expect(() => new MinMaxScaler(config)).toThrow(
        "Invalid MinMaxScaler min-max config",
      );
    });

    test("should throw an error for an invalid lower/upper config", () => {
      const config = { min: 0, max: 10, bound: { lower: 20, upper: 10 } };
      expect(() => new MinMaxScaler(config)).toThrow(
        "Invalid MinMaxScaler bound config",
      );
    });

    test("should throw an error for an equal lower/upper config", () => {
      const config = { min: 0, max: 10, bound: { lower: 10, upper: 10 } };
      expect(() => new MinMaxScaler(config)).toThrow(
        "Invalid MinMaxScaler bound config",
      );
    });

    test("should throw an error on a value out of min/max", () => {
      const config = { min: 0, max: 10 };
      expect(() => new MinMaxScaler(config).scale(15)).toThrow(
        "Value out of min/max range",
      );
    });
  });

  describe("descale", () => {
    test("should be in bounds", () => {
      const config = { min: 0, max: 100, bound: { lower: 10, upper: 20 } };
      const scaler = new MinMaxScaler(config);

      expect(() => scaler.descale(5)).toThrow("Scaled value out of bounds");
      expect(() => scaler.descale(25)).toThrow("Scaled value out of bounds");
    });
  });

  describe("getMinMax", () => {
    test("should handle empty arrays", () => {
      const values: [] = [];
      expect(() => MinMaxScaler.getMinMax(values)).toThrow(
        "An empty array supplied",
      );
    });

    test("should return one value arrays", () => {
      const values = [10];
      const { min, max } = MinMaxScaler.getMinMax(values);
      expect(min).toBe(10);
      expect(max).toBe(10);
    });

    test("should return the minimum and maximum values from an array", () => {
      const values = [10, 5, 20, 15, 30];
      const { min, max } = MinMaxScaler.getMinMax(values);
      expect(min).toBe(5);
      expect(max).toBe(30);
    });
  });
});
