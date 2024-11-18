import { describe, expect, test } from "vitest";
import { Form } from "../form";

describe("Form", () => {
  test("default value", () => {
    expect(Form.pattern({})).toEqual({ pattern: undefined, required: true });
  });

  test("default value - non required", () => {
    expect(Form.pattern({ required: false })).toEqual({
      pattern: undefined,
      required: false,
    });
  });

  test("min - required", () => {
    expect(Form.pattern({ min: 1, required: true })).toEqual({
      pattern: ".{1}",
      required: true,
    });
  });

  test("min - non required", () => {
    expect(Form.pattern({ min: 1, required: false })).toEqual({
      pattern: ".{1}",
      required: false,
    });
  });

  test("max - required", () => {
    expect(Form.pattern({ max: 2, required: true })).toEqual({
      pattern: ".{,2}",
      required: true,
    });
  });

  test("max - non required", () => {
    expect(Form.pattern({ max: 2, required: false })).toEqual({
      pattern: ".{,2}",
      required: false,
    });
  });

  test("min + max - required", () => {
    expect(Form.pattern({ min: 1, max: 2, required: true })).toEqual({
      pattern: ".{1,2}",
      required: true,
    });
  });

  test("min + max - non required", () => {
    expect(Form.pattern({ min: 1, max: 2, required: false })).toEqual({
      pattern: ".{1,2}",
      required: false,
    });
  });
});
