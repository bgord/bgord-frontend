import { render, renderHook, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useBreakpoint } from "../hooks/use-breakpoint";
import { getSafeWindow } from "../safe-window";

// Mock getSafeWindow
vi.mock("../safe-window", () => ({
  getSafeWindow: vi.fn(),
}));

const mockWindow = {
  innerWidth: 1024,
  innerHeight: 768,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
};

describe("useBreakpoint", () => {
  beforeEach(() => vi.clearAllMocks());

  test("returns true when width is below breakpoint", () => {
    vi.mocked(getSafeWindow).mockReturnValue({
      ...mockWindow,
      innerHeight: 1024,
      innerWidth: 50,
    } as any);
    const { result } = renderHook(() => useBreakpoint(768));
    expect(result.current).toBe(true);
  });

  test("returns true when width equals breakpoint", () => {
    vi.mocked(getSafeWindow).mockReturnValue({
      ...mockWindow,
      innerHeight: 1024,
      innerWidth: 50,
    } as any);
    const { result } = renderHook(() => useBreakpoint(768));
    expect(result.current).toBe(true);
  });

  test("returns false when width is above breakpoint", () => {
    vi.mocked(getSafeWindow).mockReturnValue({
      ...mockWindow,
      innerWidth: 1024,
      innerHeight: 800,
    } as any);
    const { result } = renderHook(() => useBreakpoint(768));
    expect(result.current).toBe(false);
  });

  test("handles zero width", () => {
    vi.mocked(getSafeWindow).mockReturnValue({
      ...mockWindow,
      innerWidth: 0,
      innerHeight: 0,
    } as any);
    const { result } = renderHook(() => useBreakpoint(768));
    expect(result.current).toBe(true);
  });
});

// Component Integration test
function ResponsiveLayout() {
  const isMobile = useBreakpoint(768);

  return (
    <div data-testid="layout">
      {isMobile ? (
        <div data-testid="mobile-view">Mobile View</div>
      ) : (
        <div data-testid="desktop-view">Desktop View</div>
      )}
    </div>
  );
}

describe("Breakpoint Component Integration", () => {
  test("renders mobile view below breakpoint", () => {
    vi.mocked(getSafeWindow).mockReturnValue({
      ...mockWindow,
      innerWidth: 500,
      innerHeight: 800,
    } as any);
    render(<ResponsiveLayout />);

    expect(screen.getByTestId("mobile-view")).toBeInTheDocument();
    expect(screen.queryByTestId("desktop-view")).not.toBeInTheDocument();
  });

  test("renders desktop view above breakpoint", () => {
    vi.mocked(getSafeWindow).mockReturnValue({
      ...mockWindow,
      innerWidth: 1024,
      innerHeight: 800,
    } as any);
    render(<ResponsiveLayout />);

    expect(screen.getByTestId("desktop-view")).toBeInTheDocument();
    expect(screen.queryByTestId("mobile-view")).not.toBeInTheDocument();
  });

  test("defaults to mobile view when dimensions are undefined", () => {
    vi.mocked(getSafeWindow).mockReturnValue({
      ...mockWindow,
      innerWidth: undefined,
      innerHeight: undefined,
    } as any);
    render(<ResponsiveLayout />);

    expect(screen.getByTestId("mobile-view")).toBeInTheDocument();
  });
});
