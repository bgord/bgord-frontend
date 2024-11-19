import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useList } from "../hooks/use-list";

describe("useList", () => {
  test("initializes with empty array by default", () => {
    const { result } = renderHook(() => useList<string>());
    const [items] = result.current;
    expect(items).toEqual([]);
  });

  test("initializes with default items", () => {
    const defaultItems = ["a", "b", "c"];
    const { result } = renderHook(() => useList({ defaultItems }));
    const [items] = result.current;
    expect(items).toEqual(defaultItems);
  });

  test("add functionality", () => {
    const { result } = renderHook(() => useList<string>());
    const [, actions] = result.current;

    act(() => {
      actions.add("test");
    });
    expect(result.current[0]).toEqual(["test"]);

    act(() => {
      actions.add(["multiple", "items"]);
    });
    expect(result.current[0]).toEqual(["test", "multiple", "items"]);
  });

  test("remove functionality", () => {
    const { result } = renderHook(() =>
      useList<string>({ defaultItems: ["a", "b", "c"] }),
    );
    const [, actions] = result.current;

    act(() => {
      actions.remove("b");
    });
    expect(result.current[0]).toEqual(["a", "c"]);
  });

  test("clear functionality", () => {
    const { result } = renderHook(() =>
      useList<string>({ defaultItems: ["a", "b"] }),
    );
    const [, actions] = result.current;

    act(() => {
      actions.clear();
    });
    expect(result.current[0]).toEqual([]);
  });

  test("toggle functionality", () => {
    const { result } = renderHook(() => useList<string>());
    const [, actions] = result.current;

    // First toggle adds the item
    act(() => {
      actions.toggle("test");
    });
    expect(result.current[0]).toHaveLength(1);
    expect(result.current[0]).toContain("test");

    // Second toggle removes it
    act(() => actions.toggle("test"));
    expect(result.current[0]).toHaveLength(0);
  });

  test("isAdded functionality", () => {
    const { result } = renderHook(() =>
      useList<string>({ defaultItems: ["test"] }),
    );
    const [, actions] = result.current;

    expect(actions.isAdded("test")).toBe(true);
    expect(actions.isAdded("nonexistent")).toBe(false);
  });

  test("custom comparison function", () => {
    type TestItem = { id: number; value: string };
    const comparisonFn = (a: TestItem, b: TestItem) => a.id === b.id;
    const defaultItems = [{ id: 1, value: "test" }];

    const { result } = renderHook(() =>
      useList<TestItem>({ defaultItems, comparisonFn }),
    );
    const [, actions] = result.current;

    expect(actions.isAdded({ id: 1, value: "different" })).toBe(true);

    act(() => {
      actions.remove({ id: 1, value: "any" });
    });
    expect(result.current[0]).toEqual([]);
  });

  test("update functionality", () => {
    const { result } = renderHook(() => useList<string>());
    const [, actions] = result.current;

    act(() => {
      actions.update(["direct", "update"]);
    });
    expect(result.current[0]).toEqual(["direct", "update"]);
  });

  test("component integration", () => {
    function TestComponent() {
      const [items, actions] = useList<string>();
      return (
        <div>
          <button
            type="button"
            onClick={() => actions.add("item")}
            data-testid="add"
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => actions.remove("item")}
            data-testid="remove"
          >
            Remove
          </button>
          <button
            type="button"
            onClick={() => actions.toggle("item")}
            data-testid="toggle"
          >
            Toggle
          </button>
          <button type="button" onClick={actions.clear} data-testid="clear">
            Clear
          </button>
          <div data-testid="items">{items.join(",")}</div>
          <div data-testid="exists">{actions.isAdded("item").toString()}</div>
        </div>
      );
    }

    render(<TestComponent />);

    fireEvent.click(screen.getByTestId("add"));
    expect(screen.getByTestId("items")).toHaveTextContent("item");
    expect(screen.getByTestId("exists")).toHaveTextContent("true");

    fireEvent.click(screen.getByTestId("toggle"));
    expect(screen.getByTestId("items")).toHaveTextContent("");
    expect(screen.getByTestId("exists")).toHaveTextContent("false");

    fireEvent.click(screen.getByTestId("add"));
    fireEvent.click(screen.getByTestId("clear"));
    expect(screen.getByTestId("items")).toHaveTextContent("");
  });
});
