import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { UseFileState } from "../hooks/use-file";
import { useImageFileResolution } from "../hooks/use-image-file-resolution";

vi.mock("../get-image-resolution", () => ({
  getImageResolution: vi.fn(),
  emptyImageResolution: { width: null, height: null },
}));

describe("useImageFileResolution", () => {
  const mockPreview = "data:image/png;base64,test";
  const mockFile = {
    state: UseFileState.idle,
    data: null,
    preview: mockPreview,
    clear: vi.fn(),
    select: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("shows empty resolution initially", () => {
    function TestComponent({ file = mockFile }) {
      // @ts-ignore
      const resolution = useImageFileResolution(file);
      return (
        <div>
          <div data-testid="width">{resolution.width || "no width"}</div>
          <div data-testid="height">{resolution.height || "no height"}</div>
        </div>
      );
    }

    render(<TestComponent />, {
      wrapper: createWrapper(),
    });

    expect(screen.getByTestId("width")).toHaveTextContent("no width");
    expect(screen.getByTestId("height")).toHaveTextContent("no height");
  });
});

function createWrapper() {
  // @ts-ignore
  return ({ children }) => (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={children} />
      </Routes>
    </MemoryRouter>
  );
}
