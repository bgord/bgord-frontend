import { act, render, renderHook, screen } from "@testing-library/react";
import { Navigation } from "react-router-dom";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { useDelayedLoader } from "../hooks/use-delayed-loader";

describe("useDelayedLoader hook", () => {
  const mockNavigation: Partial<Navigation> = {
    state: "idle",
    location: undefined,
    formData: undefined,
    formAction: undefined,
    formMethod: undefined,
  };

  beforeEach(() => vi.useFakeTimers());

  afterEach(() => {
    vi.clearAllMocks();
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  test("initializes with loader disabled", () => {
    const { result } = renderHook(() => useDelayedLoader(mockNavigation as Navigation));
    expect(result.current.on).toBe(false);
  });

  test("doesn't show loader before delay elapsed", () => {
    const navigation = { ...mockNavigation, state: "loading" };
    const { result } = renderHook(() => useDelayedLoader(navigation as Navigation, 500));
    expect(result.current.on).toBe(false);
  });

  test("shows loader after delay when navigation is loading", () => {
    const navigation = { ...mockNavigation, state: "loading" };
    const { result } = renderHook(() => useDelayedLoader(navigation as Navigation, 500));

    act(() => vi.advanceTimersByTime(500));

    expect(result.current.on).toBe(true);
  });

  test("hides loader when navigation is idle", () => {
    const { result, rerender } = renderHook(
      // @ts-ignore
      (props) => useDelayedLoader(props),
      { initialProps: { ...mockNavigation, state: "loading" } },
    );

    act(() => vi.advanceTimersByTime(500));
    expect(result.current.on).toBe(true);

    rerender({ ...mockNavigation, state: "idle" });
    expect(result.current.on).toBe(false);
  });

  test("cleans up timeout on unmount", () => {
    const { unmount } = renderHook(() => useDelayedLoader(mockNavigation as Navigation));
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});

// Separate component tests that don't rely on timers
describe("LoaderComponent", () => {
  const mockNavigation: Partial<Navigation> = {
    state: "idle",
    location: undefined,
    formData: undefined,
    formAction: undefined,
    formMethod: undefined,
  };

  function TestComponent({ navigation = mockNavigation }) {
    const loader = useDelayedLoader(navigation as Navigation, 500);
    return <div>{loader.on && <div data-testid="loader">Loading...</div>}</div>;
  }

  test("renders without loader initially", () => {
    render(<TestComponent />);
    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
  });
});
