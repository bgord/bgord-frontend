import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test, vi } from "vitest";
import { KeyNameEnum, useKeyHandler } from "../hooks/use-key-handler";

describe("useKeyHandler", () => {
  test("returns a function", () => {
    const { result } = renderHook(() => useKeyHandler({}));
    expect(typeof result.current).toBe("function");
  });

  test("executes handler for Enter key", () => {
    const enterHandler = vi.fn();
    const { result } = renderHook(() => useKeyHandler({ [KeyNameEnum.Enter]: enterHandler }));

    result.current({
      key: KeyNameEnum.Enter,
    } as React.KeyboardEvent<HTMLElement>);
    expect(enterHandler).toHaveBeenCalledTimes(1);
  });

  test("executes handler for Space key", () => {
    const spaceHandler = vi.fn();
    const { result } = renderHook(() => useKeyHandler({ [KeyNameEnum.Space]: spaceHandler }));

    result.current({
      key: KeyNameEnum.Space,
    } as React.KeyboardEvent<HTMLElement>);
    expect(spaceHandler).toHaveBeenCalledTimes(1);
  });

  test("handles multiple key handlers", () => {
    const enterHandler = vi.fn();
    const spaceHandler = vi.fn();

    const { result } = renderHook(() =>
      useKeyHandler({
        [KeyNameEnum.Enter]: enterHandler,
        [KeyNameEnum.Space]: spaceHandler,
      }),
    );

    // Test Enter
    result.current({
      key: KeyNameEnum.Enter,
    } as React.KeyboardEvent<HTMLElement>);
    expect(enterHandler).toHaveBeenCalledTimes(1);
    expect(spaceHandler).not.toHaveBeenCalled();

    // Test Space
    result.current({
      key: KeyNameEnum.Space,
    } as React.KeyboardEvent<HTMLElement>);
    expect(spaceHandler).toHaveBeenCalledTimes(1);
    expect(enterHandler).toHaveBeenCalledTimes(1);
  });

  test("ignores unregistered keys", () => {
    const enterHandler = vi.fn();
    const { result } = renderHook(() => useKeyHandler({ [KeyNameEnum.Enter]: enterHandler }));

    result.current({ key: "a" } as React.KeyboardEvent<HTMLElement>);
    expect(enterHandler).not.toHaveBeenCalled();
  });

  test("handles undefined handlers gracefully", () => {
    const { result } = renderHook(() => useKeyHandler({ [KeyNameEnum.Enter]: undefined }));

    expect(() => {
      result.current({
        key: KeyNameEnum.Enter,
      } as React.KeyboardEvent<HTMLElement>);
    }).not.toThrow();
  });

  test("works with component integration", () => {
    const enterHandler = vi.fn();
    const spaceHandler = vi.fn();

    function TestComponent() {
      const handleKey = useKeyHandler({
        [KeyNameEnum.Enter]: enterHandler,
        [KeyNameEnum.Space]: spaceHandler,
      });

      return (
        <button type="button" onKeyDown={handleKey} data-testid="button">
          Test Button
        </button>
      );
    }

    render(<TestComponent />);
    const button = screen.getByTestId("button");

    // Test Enter key
    fireEvent.keyDown(button, { key: KeyNameEnum.Enter });
    expect(enterHandler).toHaveBeenCalledTimes(1);

    // Test Space key
    fireEvent.keyDown(button, { key: KeyNameEnum.Space });
    expect(spaceHandler).toHaveBeenCalledTimes(1);
  });

  test("handles empty config", () => {
    const { result } = renderHook(() => useKeyHandler({}));

    expect(() => {
      result.current({
        key: KeyNameEnum.Enter,
      } as React.KeyboardEvent<HTMLElement>);
    }).not.toThrow();
  });

  test("works with multiple key presses", () => {
    const enterHandler = vi.fn();

    function TestComponent() {
      const handleKey = useKeyHandler({
        [KeyNameEnum.Enter]: enterHandler,
      });

      return (
        <button type="button" onKeyDown={handleKey} data-testid="button">
          Test Button
        </button>
      );
    }

    render(<TestComponent />);
    const button = screen.getByTestId("button");

    // Multiple key presses
    fireEvent.keyDown(button, { key: KeyNameEnum.Enter });
    fireEvent.keyDown(button, { key: KeyNameEnum.Enter });
    fireEvent.keyDown(button, { key: KeyNameEnum.Enter });

    expect(enterHandler).toHaveBeenCalledTimes(3);
  });

  test("supports dynamic handler updates", () => {
    const initialHandler = vi.fn();
    const updatedHandler = vi.fn();

    function TestComponent({ handler }: { handler: () => void }) {
      const handleKey = useKeyHandler({
        [KeyNameEnum.Enter]: handler,
      });

      return (
        <button type="button" onKeyDown={handleKey} data-testid="button">
          Test Button
        </button>
      );
    }

    const { rerender } = render(<TestComponent handler={initialHandler} />);
    const button = screen.getByTestId("button");

    // Test initial handler
    fireEvent.keyDown(button, { key: KeyNameEnum.Enter });
    expect(initialHandler).toHaveBeenCalledTimes(1);

    // Update handler
    rerender(<TestComponent handler={updatedHandler} />);

    // Test updated handler
    fireEvent.keyDown(button, { key: KeyNameEnum.Enter });
    expect(updatedHandler).toHaveBeenCalledTimes(1);
  });
});
