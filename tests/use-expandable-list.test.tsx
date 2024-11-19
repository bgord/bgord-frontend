import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { describe, expect, test } from "vitest";
import {
  UseExpandableListState,
  useExpandableList,
} from "../hooks/use-expandable-list";

describe("useExpandableList", () => {
  test("initializes contracted when list exceeds max", () => {
    const { result } = renderHook(() =>
      useExpandableList({ max: 3, length: 5 }),
    );

    expect(result.current.state).toBe(UseExpandableListState.contracted);
    expect(result.current.numberOfExcessiveElements).toBe(2);
    expect(result.current.displayShowMore).toBe(true);
    expect(result.current.displayShowLess).toBe(false);
  });

  test("initializes expanded when list is within max", () => {
    const { result } = renderHook(() =>
      useExpandableList({ max: 5, length: 3 }),
    );

    expect(result.current.state).toBe(UseExpandableListState.expanded);
    expect(result.current.numberOfExcessiveElements).toBe(-2);
    expect(result.current.displayShowMore).toBe(false);
    expect(result.current.displayShowLess).toBe(false);
  });

  test("toggles between states correctly", () => {
    const { result } = renderHook(() =>
      useExpandableList({ max: 2, length: 4 }),
    );

    expect(result.current.state).toBe(UseExpandableListState.contracted);

    act(() => {
      result.current.actions.showMore();
    });
    expect(result.current.state).toBe(UseExpandableListState.expanded);
    expect(result.current.displayShowMore).toBe(false);
    expect(result.current.displayShowLess).toBe(true);

    act(() => {
      result.current.actions.showLess();
    });
    expect(result.current.state).toBe(UseExpandableListState.contracted);
    expect(result.current.displayShowMore).toBe(true);
    expect(result.current.displayShowLess).toBe(false);
  });

  test("filterFn returns correct items based on state", () => {
    const { result } = renderHook(() =>
      useExpandableList({ max: 2, length: 4 }),
    );

    // Contracted state
    expect(result.current.filterFn({}, 0)).toBe(true);
    expect(result.current.filterFn({}, 1)).toBe(true);
    expect(result.current.filterFn({}, 2)).toBe(false);
    expect(result.current.filterFn({}, 3)).toBe(false);

    act(() => {
      result.current.actions.showMore();
    });

    // Expanded state
    expect(result.current.filterFn({}, 0)).toBe(true);
    expect(result.current.filterFn({}, 1)).toBe(true);
    expect(result.current.filterFn({}, 2)).toBe(true);
    expect(result.current.filterFn({}, 3)).toBe(true);
  });

  test("updates state when config changes", () => {
    const { result, rerender } = renderHook(
      (props) => useExpandableList(props),
      {
        initialProps: { max: 3, length: 2 },
      },
    );

    expect(result.current.state).toBe(UseExpandableListState.expanded);

    rerender({ max: 2, length: 4 });
    expect(result.current.state).toBe(UseExpandableListState.contracted);
  });

  test("component integration", () => {
    const items = ["A", "B", "C", "D"];

    function TestComponent() {
      const list = useExpandableList({ max: 2, length: items.length });
      return (
        <div>
          <div data-testid="items">
            {items.filter((_, i) => list.filterFn(_, i)).join(",")}
          </div>
          {list.displayShowMore && (
            <button
              type="button"
              onClick={list.actions.showMore}
              data-testid="show-more"
            >
              Show More
            </button>
          )}
          {list.displayShowLess && (
            <button
              type="button"
              onClick={list.actions.showLess}
              data-testid="show-less"
            >
              Show Less
            </button>
          )}
        </div>
      );
    }

    render(<TestComponent />);

    expect(screen.getByTestId("items")).toHaveTextContent("A,B");
    expect(screen.getByTestId("show-more")).toBeInTheDocument();
    expect(screen.queryByTestId("show-less")).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("show-more"));
    expect(screen.getByTestId("items")).toHaveTextContent("A,B,C,D");
    expect(screen.queryByTestId("show-more")).not.toBeInTheDocument();
    expect(screen.getByTestId("show-less")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("show-less"));
    expect(screen.getByTestId("items")).toHaveTextContent("A,B");
  });
});
