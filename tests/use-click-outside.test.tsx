import { fireEvent, render, renderHook } from "@testing-library/react";
import React from "react";
import { Mock, afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { useClickOutside } from "../hooks/use-click-outside";

describe("useClickOutside", () => {
  let targetElement: HTMLDivElement;
  let outsideElement: HTMLDivElement;
  let excludedElement: HTMLDivElement;
  let onClickOutside: Mock;

  beforeEach(() => {
    // Setup DOM elements
    targetElement = document.createElement("div");
    outsideElement = document.createElement("div");
    excludedElement = document.createElement("div");
    document.body.appendChild(targetElement);
    document.body.appendChild(outsideElement);
    document.body.appendChild(excludedElement);

    onClickOutside = vi.fn();
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.clearAllMocks();
  });

  test("calls callback when clicking outside", () => {
    const ref = { current: targetElement };

    renderHook(() => useClickOutside(ref, onClickOutside));

    fireEvent.mouseDown(outsideElement);
    expect(onClickOutside).toHaveBeenCalledTimes(1);
  });

  test("does not call callback when clicking inside", () => {
    const ref = { current: targetElement };

    renderHook(() => useClickOutside(ref, onClickOutside));

    fireEvent.mouseDown(targetElement);
    expect(onClickOutside).not.toHaveBeenCalled();
  });

  test("does not call callback when clicking excluded element", () => {
    const ref = { current: targetElement };
    const excludeRef = { current: excludedElement };

    renderHook(() => useClickOutside(ref, onClickOutside, [excludeRef]));

    fireEvent.mouseDown(excludedElement);
    expect(onClickOutside).not.toHaveBeenCalled();
  });

  test("handles multiple excluded elements", () => {
    const ref = { current: targetElement };
    const excludeRef1 = { current: excludedElement };
    const excludeRef2 = { current: document.createElement("div") };

    renderHook(() => useClickOutside(ref, onClickOutside, [excludeRef1, excludeRef2]));

    fireEvent.mouseDown(excludedElement);
    expect(onClickOutside).not.toHaveBeenCalled();

    fireEvent.mouseDown(excludeRef2.current);
    expect(onClickOutside).not.toHaveBeenCalled();
  });

  test("handles null ref", () => {
    const ref = { current: null };

    expect(() => {
      renderHook(() => useClickOutside(ref, onClickOutside));
    }).not.toThrow();
  });

  test("handles null excluded refs", () => {
    const ref = { current: targetElement };
    const excludeRef = { current: null };

    renderHook(() => useClickOutside(ref, onClickOutside, [excludeRef]));

    fireEvent.mouseDown(outsideElement);
    expect(onClickOutside).toHaveBeenCalled();
  });

  test("cleanup removes event listener", () => {
    const removeEventListenerSpy = vi.spyOn(document, "removeEventListener");
    const ref = { current: targetElement };

    const { unmount } = renderHook(() => useClickOutside(ref, onClickOutside));

    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith("mousedown", expect.any(Function));
  });
});

// Component Integration test
function Modal({ onClose }: { onClose: () => void }) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  useClickOutside(modalRef, onClose, [buttonRef]);

  return (
    <div>
      <button type="button" ref={buttonRef} data-testid="trigger">
        Open Modal
      </button>
      <div ref={modalRef} data-testid="modal">
        Modal Content
      </div>
    </div>
  );
}

describe("Click Outside Component Integration", () => {
  test("modal closes when clicking outside", () => {
    const onClose = vi.fn();
    render(<Modal onClose={onClose} />);

    fireEvent.mouseDown(document.body);
    expect(onClose).toHaveBeenCalled();
  });

  test("modal stays open when clicking inside", () => {
    const onClose = vi.fn();
    const { getByTestId } = render(<Modal onClose={onClose} />);

    fireEvent.mouseDown(getByTestId("modal"));
    expect(onClose).not.toHaveBeenCalled();
  });

  test("modal stays open when clicking excluded element", () => {
    const onClose = vi.fn();
    const { getByTestId } = render(<Modal onClose={onClose} />);

    fireEvent.mouseDown(getByTestId("trigger"));
    expect(onClose).not.toHaveBeenCalled();
  });
});
