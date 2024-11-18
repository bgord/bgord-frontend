import {
  act,
  createEvent,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useReordering } from "../reordering";

describe("useReordering", () => {
  const mockItems = [
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
  ];

  const mockCallback = vi.fn();
  const defaultConfig = {
    correlationId: "test-id",
    initialItems: mockItems,
    callback: mockCallback,
  };

  beforeEach(() => {
    mockCallback.mockClear();
  });

  function createMockDragEvent(type: string) {
    return {
      type,
      preventDefault: vi.fn(),
      dataTransfer: {
        setData: vi.fn(),
        setDragImage: vi.fn(),
        effectAllowed: "move",
      },
      currentTarget: {
        parentNode: document.createElement("div"),
      },
    };
  }

  test("initializes with provided items", () => {
    const { result } = renderHook(() => useReordering(defaultConfig));
    expect(result.current.items).toEqual(mockItems);
    expect(result.current.enabled).toBe(true);
  });

  test("respects enabled flag", () => {
    const { result } = renderHook(() =>
      useReordering({ ...defaultConfig, enabled: false }),
    );
    expect(result.current.enabled).toBe(false);
    expect(result.current.props.handle(0).draggable).toBe(false);
  });

  test("ignores drag over same position", () => {
    const { result } = renderHook(() => useReordering(defaultConfig));
    const initialItems = [...result.current.items];

    act(() => {
      const dragStartEvent = createMockDragEvent("dragstart");
      result.current.props.handle(0).onDragStart(dragStartEvent as any);

      const dragOverEvent = createMockDragEvent("dragover");
      result.current.props.item(0).onDragOver(dragOverEvent as any);
    });

    expect(result.current.items).toEqual(initialItems);
  });
});

function ReorderableList() {
  const items = [
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
  ];

  const reordering = useReordering({
    correlationId: "test-list",
    initialItems: items,
    callback: vi.fn(),
  });

  return (
    <ul>
      {reordering.items.map((item, index) => (
        <li
          key={item.id}
          {...reordering.props.item(index)}
          data-testid={`item-${item.id}`}
        >
          <div
            {...reordering.props.handle(index)}
            data-testid={`handle-${item.id}`}
          >
            ⋮ {item.name}
          </div>
        </li>
      ))}
    </ul>
  );
}

describe("Reordering Component Integration", () => {
  test("renders reorderable list with drag handles", () => {
    render(<ReorderableList />);
    expect(screen.getByTestId("handle-1")).toHaveStyle({ cursor: "grab" });
    expect(screen.getByTestId("handle-1")).toHaveAttribute("draggable", "true");
  });

  test("handles drag and drop interaction", () => {
    render(<ReorderableList />);

    const firstHandle = screen.getByTestId("handle-1");
    const secondItem = screen.getByTestId("item-2");

    const dragStartEvent = createEvent.dragStart(firstHandle);
    const dragOverEvent = createEvent.dragOver(secondItem);
    const dragEndEvent = createEvent.dragEnd(firstHandle);

    fireEvent(firstHandle, dragStartEvent);
    expect(firstHandle).toHaveStyle({ cursor: "grabbing" });

    fireEvent(secondItem, dragOverEvent);
    fireEvent(firstHandle, dragEndEvent);
  });

  test("disabled state", () => {
    function DisabledList() {
      const reordering = useReordering({
        correlationId: "test-list",
        initialItems: [{ id: "1", name: "Item 1" }],
        callback: vi.fn(),
        enabled: false,
      });

      return (
        <div {...reordering.props.handle(0)} data-testid="disabled-handle">
          Item
        </div>
      );
    }

    render(<DisabledList />);

    const handle = screen.getByTestId("disabled-handle");
    expect(handle).toHaveStyle({ cursor: "auto" });
    expect(handle).toHaveAttribute("draggable", "false");
  });
});
