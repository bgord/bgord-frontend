import { screen, render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { useDesignMode } from "../hooks/use-design-mode";

// Component Integration test
function EditableContent() {
  const designMode = useDesignMode({ name: "edit-mode" });

  return (
    <div>
      <button onClick={designMode.toggle} data-testid="toggle-edit">
        {designMode.on ? "Disable" : "Enable"} Editing
      </button>
      <div data-testid="content" contentEditable={designMode.on}>
        Editable content
      </div>
    </div>
  );
}

describe("Design Mode Component Integration", () => {
  test("reads edit mode", () => {
    render(<EditableContent />);

    expect(screen.getByTestId("toggle-edit")).toHaveTextContent(
      "Enable Editing"
    );
    expect(screen.getByTestId("content")).toHaveAttribute(
      "contenteditable",
      "false"
    );
  });
});
