import { renderHook, cleanup } from "@testing-library/react";
import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";
import { useScrollLock } from "../hooks/use-scroll-lock";

describe("useScrollLock", () => {
  let mockHtmlElement: HTMLElement;
  let originalOverflow: string;

  beforeEach(() => {
    mockHtmlElement = document.createElement("html");
    originalOverflow = "visible";

    vi.spyOn(document, "querySelector").mockReturnValue(mockHtmlElement);

    vi.spyOn(window, "getComputedStyle").mockReturnValue({
      overflow: originalOverflow,
    } as CSSStyleDeclaration);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  test("locks scroll by default", () => {
    renderHook(() => useScrollLock());

    expect(mockHtmlElement.style.overflow).toEqual("hidden");
  });

  test("respects condition parameter when false", () => {
    renderHook(() => useScrollLock(false));

    expect(mockHtmlElement.style.overflow).toEqual("");
  });

  test("changes overflow style when condition changes", () => {
    const { rerender } = renderHook(
      ({ condition }) => useScrollLock(condition),
      { initialProps: { condition: false } },
    );

    expect(mockHtmlElement.style.overflow).toEqual("");

    rerender({ condition: true });
    expect(mockHtmlElement.style.overflow).toEqual("hidden");

    rerender({ condition: false });
    expect(mockHtmlElement.style.overflow).toEqual(originalOverflow);
  });

  test("restores original overflow style on unmount", () => {
    const { unmount } = renderHook(() => useScrollLock());

    expect(mockHtmlElement.style.overflow).toEqual("hidden");

    unmount();
    expect(mockHtmlElement.style.overflow).toEqual(originalOverflow);
  });

  test("preserves original style when condition is false", () => {
    mockHtmlElement.style.overflow = "scroll";

    const { unmount } = renderHook(() => useScrollLock(false));

    expect(mockHtmlElement.style.overflow).toEqual("scroll");

    unmount();
    expect(mockHtmlElement.style.overflow).toEqual("scroll");
  });

  test("handles rapid mounting and unmounting", async () => {
    const { unmount: unmountFirst } = renderHook(() => useScrollLock());
    expect(mockHtmlElement.style.overflow).toEqual("hidden");

    unmountFirst();

    const { unmount: unmountSecond } = renderHook(() => useScrollLock());
    expect(mockHtmlElement.style.overflow).toEqual("hidden");

    unmountSecond();
    expect(mockHtmlElement.style.overflow).toEqual(originalOverflow);
  });

  test("handles null querySelector result", () => {
    vi.spyOn(document, "querySelector").mockReturnValue(null);

    expect(() => renderHook(() => useScrollLock())).not.toThrow();
  });

  test("handles custom original overflow values", () => {
    const customOverflow = "overlay";
    vi.spyOn(window, "getComputedStyle").mockReturnValue({
      overflow: customOverflow,
    } as CSSStyleDeclaration);

    const { unmount } = renderHook(() => useScrollLock());

    expect(mockHtmlElement.style.overflow).toEqual("hidden");

    unmount();
    expect(mockHtmlElement.style.overflow).toEqual(customOverflow);
  });
});
