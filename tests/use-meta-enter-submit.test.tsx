import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useMetaEnterSubmit } from "../hooks/use-meta-enter-submit";

describe("useMetaEnterSubmit", () => {
  test("returns onKeyDown handler", () => {
    const { result } = renderHook(() => useMetaEnterSubmit());

    expect(result.current).toHaveProperty("onKeyDown");
    expect(typeof result.current.onKeyDown).toBe("function");
  });

  test("submits form on Meta+Enter", () => {
    const mockRequestSubmit = vi.fn();

    function TestComponent() {
      const metaEnterSubmit = useMetaEnterSubmit();

      return (
        <form>
          <textarea data-testid="textarea" {...metaEnterSubmit} />
        </form>
      );
    }

    render(<TestComponent />);
    const textarea = screen.getByTestId("textarea") as HTMLTextAreaElement;

    // Mock form.requestSubmit
    const form = textarea.form as HTMLFormElement;
    form.requestSubmit = mockRequestSubmit;

    // Simulate Meta+Enter
    fireEvent.keyDown(textarea, { key: "Enter", metaKey: true });

    expect(mockRequestSubmit).toHaveBeenCalledTimes(1);
  });

  test("does not submit on Enter without Meta key", () => {
    const mockRequestSubmit = vi.fn();

    function TestComponent() {
      const metaEnterSubmit = useMetaEnterSubmit();
      return (
        <form>
          <textarea data-testid="textarea" {...metaEnterSubmit} />
        </form>
      );
    }

    render(<TestComponent />);
    const textarea = screen.getByTestId("textarea") as HTMLTextAreaElement;

    // Mock form.requestSubmit
    const form = textarea.form as HTMLFormElement;
    form.requestSubmit = mockRequestSubmit;

    // Simulate Enter without Meta
    fireEvent.keyDown(textarea, {
      key: "Enter",
      metaKey: false,
    });

    expect(mockRequestSubmit).not.toHaveBeenCalled();
  });

  test("does not submit on Meta without Enter", () => {
    const mockRequestSubmit = vi.fn();

    function TestComponent() {
      const metaEnterSubmit = useMetaEnterSubmit();
      return (
        <form>
          <textarea data-testid="textarea" {...metaEnterSubmit} />
        </form>
      );
    }

    render(<TestComponent />);
    const textarea = screen.getByTestId("textarea") as HTMLTextAreaElement;

    // Mock form.requestSubmit
    const form = textarea.form as HTMLFormElement;
    form.requestSubmit = mockRequestSubmit;

    // Simulate Meta+A
    fireEvent.keyDown(textarea, {
      key: "a",
      metaKey: true,
    });

    expect(mockRequestSubmit).not.toHaveBeenCalled();
  });

  test("handles textarea without form gracefully", () => {
    function TestComponent() {
      const metaEnterSubmit = useMetaEnterSubmit();
      return <textarea data-testid="textarea" {...metaEnterSubmit} />;
    }

    render(<TestComponent />);
    const textarea = screen.getByTestId("textarea");

    // Should not throw when there's no form
    expect(() => {
      fireEvent.keyDown(textarea, { key: "Enter", metaKey: true });
    }).not.toThrow();
  });

  test("does not interfere with other keyboard shortcuts", () => {
    const mockRequestSubmit = vi.fn();
    const mockOtherHandler = vi.fn();

    function TestComponent() {
      const metaEnterSubmit = useMetaEnterSubmit();
      const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        metaEnterSubmit.onKeyDown(e);
        if (e.key === "b" && e.metaKey) {
          mockOtherHandler();
        }
      };

      return (
        <form>
          <textarea onKeyDown={handleKeyDown} data-testid="textarea" />
        </form>
      );
    }

    render(<TestComponent />);
    const textarea = screen.getByTestId("textarea") as HTMLTextAreaElement;

    // Mock form.requestSubmit
    const form = textarea.form as HTMLFormElement;
    form.requestSubmit = mockRequestSubmit;

    // Test another meta shortcut
    fireEvent.keyDown(textarea, { key: "b", metaKey: true });

    expect(mockRequestSubmit).not.toHaveBeenCalled();
    expect(mockOtherHandler).toHaveBeenCalled();
  });
});
