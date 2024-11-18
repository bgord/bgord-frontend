import { render, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { useFocusKeyboardShortcut } from "../hooks/use-focus-keyboard-shortcut";

function SearchInput() {
  const { ref } = useFocusKeyboardShortcut<HTMLInputElement>("ctrl+k");
  return (
    <input
      ref={ref}
      type="search"
      placeholder="Search (Ctrl+K)"
      data-testid="search-input"
    />
  );
}

describe("Focus Shortcut Component Integration", () => {
  test("renders input with focus capability", () => {
    const { getByTestId } = render(<SearchInput />);
    const input = getByTestId("search-input");
    expect(input).toBeInTheDocument();
  });

  test("maintains focus when typing", () => {
    const { getByTestId } = render(<SearchInput />);
    const input = getByTestId("search-input");

    input.focus();
    fireEvent.change(input, { target: { value: "test" } });

    expect(input).toBe(document.activeElement);
  });
});
