import { act, fireEvent, render, renderHook, screen } from "@testing-library/react";
import React, { useState } from "react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { useDebounce } from "../hooks/use-debounce";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should initialize with initial value", () => {
    const { result } = renderHook(() => useDebounce({ value: "initial", delayMs: 500 }));

    expect(result.current).toBe("initial");
  });

  test("should debounce value changes", () => {
    const { result, rerender } = renderHook((props) => useDebounce(props), {
      initialProps: { value: "initial", delayMs: 500 },
    });

    // First change
    rerender({ value: "changed", delayMs: 500 });
    expect(result.current).toBe("initial"); // Still initial

    // Advance timer halfway
    act(() => {
      vi.advanceTimersByTime(250);
    });
    expect(result.current).toBe("initial"); // Still initial

    // Complete the delay
    act(() => {
      vi.advanceTimersByTime(250);
    });
    expect(result.current).toBe("changed"); // Now updated
  });

  test("should handle rapid value changes", () => {
    const { result, rerender } = renderHook((props) => useDebounce(props), {
      initialProps: { value: "initial", delayMs: 500 },
    });

    // Multiple rapid changes
    rerender({ value: "change1", delayMs: 500 });
    rerender({ value: "change2", delayMs: 500 });
    rerender({ value: "change3", delayMs: 500 });

    expect(result.current).toBe("initial"); // Still initial

    // Advance timer fully
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toBe("change3"); // Only last value
  });

  test("should handle different value types", () => {
    // Number type
    const { result: numResult } = renderHook(() => useDebounce({ value: 42, delayMs: 500 }));
    expect(numResult.current).toBe(42);

    // Object type
    const { result: objResult } = renderHook(() => useDebounce({ value: { key: "value" }, delayMs: 500 }));
    expect(objResult.current).toEqual({ key: "value" });

    // Array type
    const { result: arrResult } = renderHook(() => useDebounce({ value: [1, 2, 3], delayMs: 500 }));
    expect(arrResult.current).toEqual([1, 2, 3]);
  });

  test("should cleanup on unmount", () => {
    const clearTimeoutSpy = vi.spyOn(window, "clearTimeout");
    const { unmount } = renderHook(() => useDebounce({ value: "test", delayMs: 500 }));

    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});

// Real-world component usage tests
describe("useDebounce in components", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should work with search input", async () => {
    const onSearch = vi.fn();

    function SearchComponent() {
      const [searchTerm, setSearchTerm] = useState("");
      const debouncedTerm = useDebounce({ value: searchTerm, delayMs: 500 });

      React.useEffect(() => {
        onSearch(debouncedTerm);
      }, [debouncedTerm]);

      return (
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          data-testid="search-input"
        />
      );
    }

    render(<SearchComponent />);
    const input = screen.getByTestId("search-input");

    // Type rapidly
    fireEvent.change(input, { target: { value: "t" } });
    fireEvent.change(input, { target: { value: "te" } });
    fireEvent.change(input, { target: { value: "tes" } });
    fireEvent.change(input, { target: { value: "test" } });

    // Should not call immediately
    expect(onSearch).toHaveBeenCalledTimes(1); // Initial call with empty string
    expect(onSearch).toHaveBeenLastCalledWith("");

    // Advance timers
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Should call with final value
    expect(onSearch).toHaveBeenCalledTimes(2);
    expect(onSearch).toHaveBeenLastCalledWith("test");
  });

  test("should work with form validation", async () => {
    const onValidate = vi.fn();

    function FormComponent() {
      const [value, setValue] = useState("");
      const debouncedValue = useDebounce({ value, delayMs: 300 });

      React.useEffect(() => {
        onValidate(debouncedValue);
      }, [debouncedValue]);

      return (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          data-testid="form-input"
        />
      );
    }

    render(<FormComponent />);
    const input = screen.getByTestId("form-input");

    // Type something invalid
    fireEvent.change(input, { target: { value: "invalid@" } });

    // Validation shouldn't run immediately
    expect(onValidate).toHaveBeenCalledTimes(1); // Initial call with empty string

    // Complete typing
    fireEvent.change(input, { target: { value: "invalid@email" } });

    // Wait for debounce
    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Should validate final value
    expect(onValidate).toHaveBeenCalledTimes(2);
    expect(onValidate).toHaveBeenLastCalledWith("invalid@email");
  });

  test("should handle window resize events", () => {
    const onResize = vi.fn();

    function ResizeComponent() {
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      const debouncedWidth = useDebounce({ value: windowWidth, delayMs: 200 });

      React.useEffect(() => {
        onResize(debouncedWidth);
      }, [debouncedWidth]);

      React.useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      return <div data-testid="width-display">{debouncedWidth}</div>;
    }

    render(<ResizeComponent />);

    // Simulate multiple rapid resize events
    act(() => {
      window.innerWidth = 768;
      fireEvent(window, new Event("resize"));
      window.innerWidth = 1024;
      fireEvent(window, new Event("resize"));
      window.innerWidth = 1200;
      fireEvent(window, new Event("resize"));
    });

    // Should not update immediately
    expect(onResize).toHaveBeenCalledTimes(1); // Initial call

    // Wait for debounce
    act(() => {
      vi.advanceTimersByTime(200);
    });

    // Should only call with final value
    expect(onResize).toHaveBeenCalledTimes(2);
    expect(onResize).toHaveBeenLastCalledWith(1200);
  });
});
