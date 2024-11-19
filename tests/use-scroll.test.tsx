import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { useScroll } from "../hooks/use-scroll";

describe("useScroll", () => {
  let originalScrollTo: typeof window.scrollTo;
  let originalScrollY: number;
  let originalClientHeight: number;
  let originalScrollHeight: number;

  beforeEach(() => {
    originalScrollTo = window.scrollTo;
    originalScrollY = window.scrollY;
    originalClientHeight = document.body.clientHeight;
    originalScrollHeight = document.body.scrollHeight;

    // Mock scrollTo to prevent actual scrolling in tests
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    window.scrollTo = originalScrollTo;
    Object.defineProperty(window, "scrollY", { value: originalScrollY });
    Object.defineProperty(document.body, "clientHeight", {
      value: originalClientHeight,
    });
    Object.defineProperty(document.body, "scrollHeight", {
      value: originalScrollHeight,
    });
  });

  test("initializes with default values", () => {
    const { result } = renderHook(() => useScroll());

    expect(result.current.position).toEqual({
      value: 0,
      isInitial: true,
      hasChanged: false,
    });
    expect(typeof result.current.actions.goToTop).toBe("function");
  });

  test("updates scroll position on window scroll", () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      Object.defineProperty(window, "scrollY", { value: 100 });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current.position).toEqual({
      value: 100,
      isInitial: false,
      hasChanged: true,
    });
  });

  test("goToTop calls window.scrollTo with smooth behavior", () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      result.current.actions.goToTop();
    });

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  test("cleans up event listener on unmount", () => {
    const scrollListener = vi.fn();
    window.addEventListener("scroll", scrollListener);

    const { unmount } = renderHook(() => useScroll());
    unmount();

    window.dispatchEvent(new Event("scroll"));
    expect(scrollListener).toHaveBeenCalledTimes(1);
  });
});
