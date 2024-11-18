import { act, render, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { getCurrentTimestamp, useCurrentTimestamp } from "../hooks/use-current-timestamp";
import { Time } from "../time";

describe("getCurrentTimestamp", () => {
  test("returns current timestamp", () => {
    const now = Date.now();
    expect(getCurrentTimestamp()).toBeGreaterThanOrEqual(now);
  });
});

describe("useCurrentTimestamp", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Mock Date.now to have consistent values in tests
    const mockNow = 1677600000000; // Some fixed timestamp
    vi.spyOn(Date, "now").mockImplementation(() => mockNow);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  test("returns initial timestamp", () => {
    const { result } = renderHook(() => useCurrentTimestamp());
    expect(result.current).toBe(Date.now());
  });

  test("updates timestamp every second", () => {
    const { result } = renderHook(() => useCurrentTimestamp());
    const initialTimestamp = result.current;

    // Advance timers by 1 second
    act(() => {
      vi.advanceTimersByTime(Time.Seconds(1).ms);
    });

    expect(result.current).toBe(initialTimestamp);

    // Mock a new timestamp
    const newTimestamp = initialTimestamp + 1000;
    vi.spyOn(Date, "now").mockImplementation(() => newTimestamp);

    // Advance timers by another second
    act(() => {
      vi.advanceTimersByTime(Time.Seconds(1).ms);
    });

    expect(result.current).toBe(newTimestamp);
  });

  test("clears interval on unmount", () => {
    const clearIntervalSpy = vi.spyOn(window, "clearInterval");
    const { unmount } = renderHook(() => useCurrentTimestamp());

    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
  });

  test("uses correct interval time", () => {
    const setIntervalSpy = vi.spyOn(window, "setInterval");
    renderHook(() => useCurrentTimestamp());

    expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), Time.Seconds(1).ms);
  });
});

// Component Integration test
function TimestampDisplay() {
  const timestamp = useCurrentTimestamp();
  return <div data-testid="timestamp">{timestamp}</div>;
}

describe("CurrentTimestamp Component Integration", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("displays and updates timestamp", () => {
    const initialTimestamp = 1677600000000;
    vi.spyOn(Date, "now").mockImplementation(() => initialTimestamp);

    const { getByTestId } = render(<TimestampDisplay />);
    expect(getByTestId("timestamp")).toHaveTextContent(initialTimestamp.toString());

    // Mock new timestamp and advance time
    const newTimestamp = initialTimestamp + 1000;
    vi.spyOn(Date, "now").mockImplementation(() => newTimestamp);

    act(() => {
      vi.advanceTimersByTime(Time.Seconds(1).ms);
    });

    expect(getByTestId("timestamp")).toHaveTextContent(newTimestamp.toString());
  });
});
