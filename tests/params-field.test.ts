import { expect, describe, test } from "vitest";

import { ParamsField } from "../hooks/params-field";

describe("ParamsField", () => {
  test("create - empty value", () => {
    const result = new ParamsField(ParamsField.emptyValue);
    expect(result.get()).toEqual(ParamsField.emptyValue);
    expect(result.isEmpty()).toEqual(true);
  });
  test("create - empty string", () => {
    const result = new ParamsField("");
    expect(result.get()).toEqual(ParamsField.emptyValue);
    expect(result.isEmpty()).toEqual(true);
  });
  test("create - null", () => {
    const result = new ParamsField(null);
    expect(result.get()).toEqual(ParamsField.emptyValue);
    expect(result.isEmpty()).toEqual(true);
  });
  test("create - non-empty value", () => {
    const result = new ParamsField("abc");
    expect(result.get()).toEqual("abc");
    expect(result.isEmpty()).toEqual(false);
  });
  test("compare - empty and empty", () => {
    expect(ParamsField.compare(undefined, undefined)).toEqual(true);
  });
  test("compare - empty and non-empty", () => {
    expect(ParamsField.compare(undefined, "abc")).toEqual(false);
  });
  test("compare - non-empty and non-empty - success", () => {
    expect(ParamsField.compare("abc", "abc")).toEqual(true);
  });
  test("compare - non-empty and non-empty - failure", () => {
    expect(ParamsField.compare("def", "abc")).toEqual(false);
  });
});
