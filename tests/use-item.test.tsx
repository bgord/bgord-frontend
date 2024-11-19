import { render, fireEvent, renderHook, act } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { useItem } from "../hooks/use-item";

describe("useItem", () => {
  test("initializes with default values", () => {
    const { result } = renderHook(() => useItem<string>());

    expect(result.current.value).toBeNull();
    expect(result.current.isDefault).toBe(true);
    expect(result.current.exists).toBe(false);
  });

  test("initializes with custom default item", () => {
    const defaultItem = "test";
    const { result } = renderHook(() => useItem<string>({ defaultItem }));

    expect(result.current.value).toBe(defaultItem);
    expect(result.current.isDefault).toBe(false);
    expect(result.current.exists).toBe(true);
  });

  test("set updates value", () => {
    const { result } = renderHook(() => useItem<string>());

    act(() => {
      result.current.set("new value");
    });

    expect(result.current.value).toBe("new value");
    expect(result.current.exists).toBe(true);
  });

  test("clear resets to default", () => {
    const { result } = renderHook(() =>
      useItem<string>({ defaultItem: "initial" })
    );

    act(() => {
      result.current.clear();
    });

    expect(result.current.value).toBeNull();
    expect(result.current.isDefault).toBe(true);
  });

  test("toggle behavior", () => {
    const { result } = renderHook(() => useItem<string>());

    // Toggle from null to value
    act(() => {
      result.current.toggle("test");
    });
    expect(result.current.value).toBe("test");

    // Toggle same value back to null
    act(() => {
      result.current.toggle("test");
    });
    expect(result.current.value).toBeNull();

    // Toggle to different value
    act(() => {
      result.current.toggle("test");
      result.current.toggle("different");
    });
    expect(result.current.value).toBe("different");
  });

  test("custom comparison function", () => {
    type TestItem = { id: number; value: string };
    const comparisonFn = (a: TestItem | null, b: TestItem | null) =>
      a?.id === b?.id;

    const { result } = renderHook(() => useItem<TestItem>({ comparisonFn }));

    const item1 = { id: 1, value: "test" };
    const item2 = { id: 1, value: "different" };

    act(() => {
      result.current.set(item1);
    });

    expect(result.current.compare(item2)).toBe(true);
    expect(result.current.compare({ id: 2, value: "test" })).toBe(false);
  });

  test("compare method", () => {
    const { result } = renderHook(() => useItem<string>());

    act(() => {
      result.current.set("test");
    });

    expect(result.current.compare("test")).toBe(true);
    expect(result.current.compare("different")).toBe(false);
    expect(result.current.compare(null)).toBe(false);
  });

  test("works with complex types", () => {
    interface ComplexType {
      nested: { value: number };
      array: string[];
    }

    const { result } = renderHook(() => useItem<ComplexType>());
    const complexItem = { nested: { value: 1 }, array: ["test"] };

    act(() => {
      result.current.set(complexItem);
    });

    expect(result.current.value).toEqual(complexItem);
    expect(result.current.compare(complexItem)).toBe(true);
  });

  test("works in component context with item selection", () => {
    function TestComponent() {
      const item = useItem<string>();
      return (
        <div>
          <button onClick={() => item.set("selected")} data-testid="select">
            Select
          </button>
          <button onClick={() => item.clear()} data-testid="clear">
            Clear
          </button>
          <button onClick={() => item.toggle("toggled")} data-testid="toggle">
            Toggle
          </button>
          <div data-testid="value">{item.value || "none"}</div>
          <div data-testid="exists">{item.exists ? "exists" : "empty"}</div>
        </div>
      );
    }

    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId("value")).toHaveTextContent("none");
    expect(getByTestId("exists")).toHaveTextContent("empty");

    fireEvent.click(getByTestId("select"));
    expect(getByTestId("value")).toHaveTextContent("selected");
    expect(getByTestId("exists")).toHaveTextContent("exists");

    fireEvent.click(getByTestId("clear"));
    expect(getByTestId("value")).toHaveTextContent("none");
    expect(getByTestId("exists")).toHaveTextContent("empty");

    fireEvent.click(getByTestId("toggle"));
    expect(getByTestId("value")).toHaveTextContent("toggled");
    expect(getByTestId("exists")).toHaveTextContent("exists");

    fireEvent.click(getByTestId("toggle"));
    expect(getByTestId("value")).toHaveTextContent("none");
    expect(getByTestId("exists")).toHaveTextContent("empty");
  });
});
