import { describe, expect, test } from "vitest";
import { LineClamp } from "../line-clamp";

describe("LineClamp", () => {
  test("works with default value", () => {
    expect(LineClamp()).toEqual({
      "data-transform": "line-clamp",
      style: { "--lines": 2 },
    });
  });

  test("works with non-default value", () => {
    expect(LineClamp(3)).toEqual({
      "data-transform": "line-clamp",
      style: { "--lines": 3 },
    });
  });
});
