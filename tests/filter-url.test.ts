import { describe, test, expect } from "vitest";
import { FilterUrl, FilterType } from "../filter-url";

describe("FilterUrl", () => {
  test("should create URL with string filters", () => {
    const url = "https://example.com/api";

    const filters: FilterType = {
      param1: "value1",
      param2: "value2",
      param3: undefined,
    };

    const filterUrl = new FilterUrl(url, filters);

    expect(filterUrl.value).toBe(`${url}?param1=value1&param2=value2`);
  });

  test("should create URL with string and numeric filters", () => {
    const url = "https://example.com/api";

    const filters: FilterType = {
      param1: "value1",
      param2: 2,
      param3: undefined,
    };

    const filterUrl = new FilterUrl(url, filters);

    expect(filterUrl.value).toBe(`${url}?param1=value1&param2=2`);
  });

  test("should create URL without filters if filters are undefined", () => {
    const url = "https://example.com/api";

    const filterUrl = new FilterUrl(url);

    expect(filterUrl.value).toBe(url);
  });

  test("should create URL without filters if filters are empty", () => {
    const url = "https://example.com/api";
    const filters: FilterType = {};

    const filterUrl = new FilterUrl(url, filters);

    expect(filterUrl.value).toBe(url);
  });
});
