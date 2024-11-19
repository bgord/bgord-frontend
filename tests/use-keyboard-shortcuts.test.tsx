import { render, renderHook } from "@testing-library/react";
import { tinykeys } from "tinykeys";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { useKeyboardShortcuts } from "../hooks/use-keyboard-shortcuts";

vi.mock("tinykeys", () => ({
  tinykeys: vi.fn(),
}));

describe("useKeyboardShortcuts", () => {
  const mockUnsubscribe = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(tinykeys).mockReturnValue(mockUnsubscribe);
  });

  test("subscribes to keyboard shortcuts on mount", () => {
    const shortcuts = { "$mod+s": vi.fn() };
    renderHook(() => useKeyboardShortcuts(shortcuts));

    expect(tinykeys).toHaveBeenCalledWith(window, shortcuts);
  });

  test("unsubscribes on unmount", () => {
    const { unmount } = renderHook(() =>
      useKeyboardShortcuts({ "$mod+s": vi.fn() }),
    );

    unmount();
    expect(mockUnsubscribe).toHaveBeenCalled();
  });

  test("handles disabled state", () => {
    renderHook(() =>
      useKeyboardShortcuts({ "$mod+s": vi.fn() }, { enabled: false }),
    );

    expect(tinykeys).not.toHaveBeenCalled();
  });

  test("resubscribes when enabled state changes", () => {
    const shortcuts = { "$mod+s": vi.fn() };
    const { rerender } = renderHook(
      ({ enabled }) => useKeyboardShortcuts(shortcuts, { enabled }),
      {
        initialProps: { enabled: false },
      },
    );

    expect(tinykeys).not.toHaveBeenCalled();

    rerender({ enabled: true });
    expect(tinykeys).toHaveBeenCalledWith(window, shortcuts);
  });

  test("component integration", () => {
    function TestComponent({ onSave = vi.fn() }) {
      useKeyboardShortcuts({
        "$mod+s": (e) => {
          e.preventDefault();
          onSave();
        },
      });
      return null;
    }

    const mockSave = vi.fn();
    const { unmount } = render(<TestComponent onSave={mockSave} />);

    const registeredShortcuts = vi.mocked(tinykeys).mock.calls[0]?.[1];
    const mockEvent = new KeyboardEvent("keydown");
    registeredShortcuts?.["$mod+s"]?.(mockEvent);

    expect(mockSave).toHaveBeenCalled();
    unmount();
  });
});
