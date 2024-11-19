import { act, fireEvent, render, renderHook, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { UseFileState, useFile } from "../hooks/use-file";

describe("useFile", () => {
  vi.useFakeTimers();
  const mockFile = new File(["test"], "test.txt", { type: "text/plain" });
  const mockLargeFile = new File(["large"], "large.txt", {
    type: "text/plain",
  });
  Object.defineProperty(mockLargeFile, "size", { value: 1000 });

  // Mock URL API
  const mockCreateObjectURL = vi.fn(() => "blob:mock-url");
  const mockRevokeObjectURL = vi.fn();

  beforeEach(() => {
    // @ts-ignore - mocking URL static methods
    global.URL.createObjectURL = mockCreateObjectURL;
    // @ts-ignore
    global.URL.revokeObjectURL = mockRevokeObjectURL;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("initializes in idle state", () => {
    const { result } = renderHook(() => useFile("test-file"));

    expect(result.current.state).toBe(UseFileState.idle);
    expect(result.current.isIdle).toBe(true);
    expect(result.current.data).toBeNull();
  });

  test("transitions to selected state on valid file selection", () => {
    const { result } = renderHook(() => useFile("test-file"));

    act(() => {
      result.current.actions.selectFile({
        currentTarget: { files: [mockFile] },
      } as any);
    });

    expect(result.current.state).toBe(UseFileState.selected);
    expect(result.current.isSelected).toBe(true);
    expect(result.current.data).toBe(mockFile);
    // @ts-ignore
    expect(result.current.preview).toBe("blob:mock-url");
    expect(mockCreateObjectURL).toHaveBeenCalledWith(mockFile);
  });

  test("transitions to error state when file exceeds maxSize", () => {
    const { result } = renderHook(() => useFile("test-file", { maxSize: 500 }));

    act(() => {
      result.current.actions.selectFile({
        currentTarget: { files: [mockLargeFile] },
      } as any);
    });

    expect(result.current.state).toBe(UseFileState.error);
    expect(result.current.isError).toBe(true);
    expect(result.current.data).toBeNull();
  });

  test("clears file and returns to idle state", () => {
    const { result } = renderHook(() => useFile("test-file"));

    act(() => {
      result.current.actions.selectFile({
        currentTarget: { files: [mockFile] },
      } as any);
    });

    // @ts-ignore
    const initialKey = result.current.input.key;

    act(() => {
      result.current.actions.clearFile();
    });

    expect(result.current.state).toBe(UseFileState.idle);
    expect(result.current.isIdle).toBe(true);
    expect(result.current.data).toBeNull();
    // @ts-ignore
    expect(result.current.input.key).not.toBe(initialKey);
  });

  test("properly handles URL cleanup", async () => {
    const { result, unmount } = renderHook(() => useFile("test-file"));

    act(() => {
      result.current.actions.selectFile({
        currentTarget: { files: [mockFile] },
      } as any);
    });

    unmount();

    // Wait for next tick to allow cleanup effects to run
    vi.runAllTimers();

    expect(mockRevokeObjectURL).toHaveBeenCalledWith("blob:mock-url");
  });
});

describe("FileUpload component", () => {
  test("handles file selection", () => {
    function FileUpload() {
      const fileUpload = useFile("profile-pic", { maxSize: 5000000 });

      return (
        <div>
          <label {...fileUpload.label.props}>
            Upload Image
            <input
              {...fileUpload.input.props}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={fileUpload.actions.selectFile}
            />
          </label>

          {fileUpload.isSelected && (
            <button type="button" onClick={fileUpload.actions.clearFile}>
              Remove
            </button>
          )}

          {fileUpload.isError && <p role="alert">File size exceeds limit</p>}
        </div>
      );
    }

    render(<FileUpload />);

    // Initial state check
    expect(screen.queryByText("Remove")).not.toBeInTheDocument();

    // Upload file
    const input = screen.getByLabelText("Upload Image");
    const file = new File(["test"], "test.jpg", { type: "image/jpeg" });

    act(() => {
      fireEvent.change(input, { target: { files: [file] } });
    });

    // Verify selected state
    expect(screen.getByText("Remove")).toBeInTheDocument();

    // Remove file
    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Remove" }));
    });

    // Verify back to initial state
    expect(screen.queryByText("Remove")).not.toBeInTheDocument();
  });
});
