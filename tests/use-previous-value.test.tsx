import { fireEvent, render, renderHook } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";
import { usePreviousValue } from "../hooks/use-previous-value";

describe("usePreviousValue", () => {
  test("returns undefined on first render without default value", () => {
    const { result } = renderHook(({ value }) => usePreviousValue(value), {
      initialProps: { value: "initial" },
    });

    expect(result.current).toBeUndefined();
  });

  test("returns default value on first render when provided", () => {
    const { result } = renderHook(({ value }) => usePreviousValue(value, "default"), {
      initialProps: { value: "initial" },
    });

    expect(result.current).toBe("default");
  });

  test("tracks previous value after updates", () => {
    const { result, rerender } = renderHook(({ value }) => usePreviousValue(value), {
      initialProps: { value: "first" },
    });

    rerender({ value: "second" });
    expect(result.current).toBe("first");

    rerender({ value: "third" });
    expect(result.current).toBe("second");
  });
});

// Component Integration test
function Counter() {
  const [count, setCount] = React.useState(0);
  const previousCount = usePreviousValue(count);

  return (
    <div>
      <button type="button" onClick={() => setCount((c) => c + 1)} data-testid="increment">
        Increment
      </button>
      <span data-testid="current">Current: {count}</span>
      <span data-testid="previous">Previous: {previousCount ?? "None"}</span>
    </div>
  );
}

describe("Previous Value Component Integration", () => {
  test("tracks previous value in component", () => {
    const { getByTestId } = render(<Counter />);

    expect(getByTestId("current")).toHaveTextContent("Current: 0");
    expect(getByTestId("previous")).toHaveTextContent("Previous: None");

    fireEvent.click(getByTestId("increment"));
    expect(getByTestId("current")).toHaveTextContent("Current: 1");
    expect(getByTestId("previous")).toHaveTextContent("Previous: 0");

    fireEvent.click(getByTestId("increment"));
    expect(getByTestId("current")).toHaveTextContent("Current: 2");
    expect(getByTestId("previous")).toHaveTextContent("Previous: 1");
  });
});
