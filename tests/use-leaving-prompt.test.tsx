import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { useLeavingPrompt } from "../hooks/use-leaving-prompt";

describe("useLeavingPrompt", () => {
  const addEventListenerSpy = vi.spyOn(window, "addEventListener");
  const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");

  beforeEach(() => {
    addEventListenerSpy.mockClear();
    removeEventListenerSpy.mockClear();
  });

  test("adds event listener when condition is true", () => {
    renderHook(() => useLeavingPrompt(true));
    expect(addEventListenerSpy).toHaveBeenCalledWith("beforeunload", expect.any(Function));
  });

  test("does not add event listener when condition is false", () => {
    renderHook(() => useLeavingPrompt(false));
    expect(addEventListenerSpy).not.toHaveBeenCalled();
  });

  test("removes event listener on cleanup", () => {
    const { unmount } = renderHook(() => useLeavingPrompt(true));
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith("beforeunload", expect.any(Function));
  });

  test("updates listener when condition changes", () => {
    const { rerender } = renderHook(({ condition }) => useLeavingPrompt(condition), {
      initialProps: { condition: false },
    });

    expect(addEventListenerSpy).not.toHaveBeenCalled();

    rerender({ condition: true });
    expect(addEventListenerSpy).toHaveBeenCalled();
  });

  test("handler prevents default behavior", () => {
    renderHook(() => useLeavingPrompt(true));
    const handler = addEventListenerSpy.mock.calls[0]?.[1] as EventListener;
    const mockEvent = {
      preventDefault: vi.fn(),
    } as unknown as BeforeUnloadEvent;

    handler(mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
