import { renderHook } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { useIsVisible } from "../hooks/use-is-visible";

describe("useIsVisible", () => {
  test("initializes with false visibility", () => {
    const ref = { current: document.createElement("div") };
    const { result } = renderHook(() => useIsVisible({ ref }));

    expect(result.current).toBe(false);
  });
});
