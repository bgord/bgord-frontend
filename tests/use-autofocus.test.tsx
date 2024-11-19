import { render, renderHook, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test, vi } from "vitest";
import { UseAutofocusConfigType, useAutofocus } from "../hooks/use-autofocus";

describe("useAutofocus", () => {
  test("focuses element when condition is true", () => {
    const mockFocus = vi.fn();
    const ref = { current: { focus: mockFocus } };

    // @ts-ignore
    renderHook(() => useAutofocus({ ref, condition: true }));

    expect(mockFocus).toHaveBeenCalled();
  });

  test("does not focus when condition is false", () => {
    const mockFocus = vi.fn();
    const ref = { current: { focus: mockFocus } };

    // @ts-ignore
    renderHook(() => useAutofocus({ ref, condition: false }));

    expect(mockFocus).not.toHaveBeenCalled();
  });

  test("handles null ref", () => {
    const ref = { current: null };

    expect(() => {
      renderHook(() => useAutofocus({ ref, condition: true }));
    }).not.toThrow();
  });

  test("handles undefined ref.current", () => {
    const ref = { current: undefined };

    expect(() => {
      // @ts-ignore
      renderHook(() => useAutofocus({ ref, condition: true }));
    }).not.toThrow();
  });

  test("updates focus when condition changes", () => {
    const mockFocus = vi.fn();
    const ref = { current: { focus: mockFocus } };

    const { rerender } = renderHook(
      (props: UseAutofocusConfigType) => useAutofocus(props),
      {
        // @ts-ignore
        initialProps: { ref, condition: false },
      },
    );

    expect(mockFocus).not.toHaveBeenCalled();

    // @ts-ignore
    rerender({ ref, condition: true });
    expect(mockFocus).toHaveBeenCalled();
  });
});

// Component Integration test
function AutofocusInput({ shouldFocus = false }) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  useAutofocus({ ref: inputRef, condition: shouldFocus });

  return (
    <input
      ref={inputRef}
      type="text"
      data-testid="autofocus-input"
      placeholder="Autofocus input"
    />
  );
}

describe("Autofocus Component Integration", () => {
  test("focuses input when condition is true", () => {
    render(<AutofocusInput shouldFocus={true} />);
    const input = screen.getByTestId("autofocus-input");

    expect(document.activeElement).toBe(input);
  });

  test("does not focus input when condition is false", () => {
    render(<AutofocusInput shouldFocus={false} />);
    const input = screen.getByTestId("autofocus-input");

    expect(document.activeElement).not.toBe(input);
  });

  test("updates focus when prop changes", () => {
    const { rerender } = render(<AutofocusInput shouldFocus={false} />);
    const input = screen.getByTestId("autofocus-input");

    expect(document.activeElement).not.toBe(input);

    rerender(<AutofocusInput shouldFocus={true} />);
    expect(document.activeElement).toBe(input);
  });
});
