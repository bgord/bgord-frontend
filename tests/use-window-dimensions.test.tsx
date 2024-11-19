import { act, render, renderHook, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { useWindowDimensions } from "../hooks/use-window-dimensions";
import { getSafeWindow } from "../safe-window";

// Mock getSafeWindow
vi.mock("../safe-window", () => ({
  getSafeWindow: vi.fn(),
}));

describe("useWindowDimensions", () => {
  const mockWindow = {
    innerWidth: 1024,
    innerHeight: 768,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(getSafeWindow).mockReturnValue(mockWindow as any);
  });

  test("updates dimensions after mount", () => {
    const { result } = renderHook(() => useWindowDimensions());

    // After effect runs, should have actual dimensions
    expect(result.current).toEqual({
      width: 1024,
      height: 768,
    });
  });

  test("handles window resize", () => {
    const { result } = renderHook(() => useWindowDimensions());

    // Get the resize handler
    const resizeHandler = mockWindow.addEventListener.mock.calls[0]?.[1];

    // Simulate window resize
    act(() => {
      mockWindow.innerWidth = 800;
      mockWindow.innerHeight = 600;
      resizeHandler();
    });

    expect(result.current).toEqual({
      width: 800,
      height: 600,
    });
  });

  test("adds and removes event listener", () => {
    const { unmount } = renderHook(() => useWindowDimensions());

    expect(mockWindow.addEventListener).toHaveBeenCalledWith("resize", expect.any(Function));

    unmount();

    expect(mockWindow.removeEventListener).toHaveBeenCalledWith("resize", expect.any(Function));
  });

  test("handles missing window safely", () => {
    vi.mocked(getSafeWindow).mockReturnValue(undefined);

    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current).toEqual({
      width: undefined,
      height: undefined,
    });
  });
});

// Component Integration test
function ResponsiveComponent() {
  const { width, height } = useWindowDimensions();

  return <div data-testid="dimensions">{width && height ? `${width}x${height}` : "Loading..."}</div>;
}

describe("Window Dimensions Component Integration", () => {
  const mockWindow = {
    innerWidth: 1024,
    innerHeight: 768,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  };

  beforeEach(() => {
    vi.mocked(getSafeWindow).mockReturnValue(mockWindow as any);
  });

  test("displays window dimensions", () => {
    render(<ResponsiveComponent />);

    expect(screen.getByTestId("dimensions")).toHaveTextContent("1024x768");
  });
});
