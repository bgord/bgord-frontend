import {
  cleanup,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { useHover } from "../hooks/use-hover";

describe("useHover", () => {
  afterEach(() => cleanup());

  test("returns ref and hover state", () => {
    const { result } = renderHook(() => useHover());

    expect(result.current).toHaveProperty("attach");
    expect(result.current).toHaveProperty("isHovering");
    expect(result.current.attach).toHaveProperty("ref");
  });

  describe("useHover in component context", () => {
    test("works with real DOM elements", () => {
      function TestComponent() {
        const { attach, isHovering } = useHover();
        return (
          <div
            ref={attach.ref}
            data-testid="hover-element"
            data-hovering={isHovering}
          >
            Hover me
          </div>
        );
      }

      render(<TestComponent />);
      const element = screen.getByTestId("hover-element");

      // Simulate hover
      fireEvent.mouseEnter(element);
      expect(element).toHaveAttribute("data-hovering", "true");

      // Simulate hover out
      fireEvent.mouseLeave(element);
      expect(element).toHaveAttribute("data-hovering", "false");
    });
  });
});
