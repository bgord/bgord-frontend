import { fireEvent, render, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { useIsOnline } from "../hooks/use-is-online";

describe("useIsOnline", () => {
  const addEventListenerSpy = vi.spyOn(window, "addEventListener");
  const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");

  beforeEach(() => vi.clearAllMocks());

  afterEach(() => vi.resetModules());

  test("initializes with correct online status", () => {
    Object.defineProperty(navigator, "onLine", {
      value: true,
      configurable: true,
    });

    const { result } = renderHook(() => useIsOnline());
    expect(result.current).toBe(true);
  });

  test("sets up online/offline event listeners", () => {
    renderHook(() => useIsOnline());

    expect(addEventListenerSpy).toHaveBeenCalledWith("online", expect.any(Function));
    expect(addEventListenerSpy).toHaveBeenCalledWith("offline", expect.any(Function));
  });

  test("cleans up event listeners on unmount", () => {
    const { unmount } = renderHook(() => useIsOnline());
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith("online", expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith("offline", expect.any(Function));
  });

  test("handles online event", () => {
    renderHook(() => useIsOnline());

    // Get the online handler from the addEventListener mock
    const onlineHandler = addEventListenerSpy.mock.calls.find(
      (call) => call[0] === "online",
    )?.[1] as EventListener;

    onlineHandler(new Event("online"));
  });

  test("handles offline event", () => {
    renderHook(() => useIsOnline());

    // Get the offline handler from the addEventListener mock
    const offlineHandler = addEventListenerSpy.mock.calls.find(
      (call) => call[0] === "offline",
    )?.[1] as EventListener;

    offlineHandler(new Event("offline"));
  });

  test("handles missing navigator.onLine", () => {
    // Temporarily remove navigator.onLine
    const original = navigator.onLine;
    Object.defineProperty(navigator, "onLine", {
      value: undefined,
      configurable: true,
    });

    const { result } = renderHook(() => useIsOnline());
    expect(result.current).toBe(true); // Defaults to true

    // Restore original
    Object.defineProperty(navigator, "onLine", {
      value: original,
      configurable: true,
    });
  });
});

// Integration test with a component
function OnlineStatus() {
  const isOnline = useIsOnline();
  return <div data-testid="status">{isOnline ? "Online" : "Offline"}</div>;
}

describe("OnlineStatus Integration", () => {
  test("displays correct online status", () => {
    Object.defineProperty(navigator, "onLine", {
      value: true,
      configurable: true,
    });
    const { getByTestId } = render(<OnlineStatus />);
    expect(getByTestId("status")).toHaveTextContent("Online");
  });

  test("updates when connection status changes", () => {
    Object.defineProperty(navigator, "onLine", {
      value: true,
      configurable: true,
    });
    const { getByTestId } = render(<OnlineStatus />);

    // Simulate going offline
    Object.defineProperty(navigator, "onLine", {
      value: false,
      configurable: true,
    });
    fireEvent(window, new Event("offline"));

    expect(getByTestId("status")).toHaveTextContent("Offline");
  });
});
