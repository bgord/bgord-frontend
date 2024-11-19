import { fireEvent, render, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { useRateLimiter } from "../hooks/use-rate-limiter";

describe("useRateLimiter", () => {
  let currentTime = 1000;
  const limitMs = 1000;
  const action = vi.fn();
  const fallback = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(Date, "now").mockImplementation(() => currentTime);
  });

  test("allows first action execution", () => {
    const { result } = renderHook(() =>
      useRateLimiter({ limitMs, action, fallback }),
    );

    result.current("test");
    expect(action).toHaveBeenCalledWith("test");
    expect(fallback).not.toHaveBeenCalled();
  });

  test("throttles subsequent calls within time limit", () => {
    const { result } = renderHook(() =>
      useRateLimiter({ limitMs, action, fallback }),
    );

    result.current("first");
    expect(action).toHaveBeenCalledWith("first");

    currentTime += 500; // Half of limit
    result.current("second");

    expect(action).toHaveBeenCalledTimes(1);
    expect(fallback).toHaveBeenCalledWith(500);
  });

  test("allows execution after time limit", () => {
    const { result } = renderHook(() =>
      useRateLimiter({ limitMs, action, fallback }),
    );

    result.current("first");
    expect(action).toHaveBeenCalledWith("first");

    currentTime += limitMs + 100;
    result.current("second");

    expect(action).toHaveBeenCalledTimes(2);
    expect(action).toHaveBeenLastCalledWith("second");
  });

  test("works without fallback", () => {
    const { result } = renderHook(() => useRateLimiter({ limitMs, action }));

    result.current("first");
    currentTime += 500;
    result.current("second");

    expect(action).toHaveBeenCalledTimes(1);
  });

  test("handles multiple arguments", () => {
    const { result } = renderHook(() =>
      useRateLimiter<string | number>({ limitMs, action, fallback }),
    );

    result.current("test", 123);
    expect(action).toHaveBeenCalledWith("test", 123);
  });

  test("component integration", () => {
    function TestComponent() {
      const handleClick = useRateLimiter({
        limitMs: 1000,
        action,
        fallback: () => vi.fn(),
      });

      return (
        <button type="button" onClick={() => handleClick()}>
          Click
        </button>
      );
    }

    const { getByText } = render(<TestComponent />);
    const button = getByText("Click");

    fireEvent.click(button);
    fireEvent.click(button);
    expect(action).toHaveBeenCalledTimes(1);
  });
});
