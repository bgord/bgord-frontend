import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { copyToClipboard } from "../copy-to-clipboard";

describe("copyToClipboard", () => {
  const mockWriteText = vi.fn();

  beforeEach(() => {
    // Setup clipboard mock
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: mockWriteText },
      writable: true,
    });

    // Clear console mock
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => vi.clearAllMocks());

  test("copies text to clipboard successfully", async () => {
    mockWriteText.mockResolvedValueOnce(undefined);
    const onSuccess = vi.fn();

    await copyToClipboard({ text: "test text", onSuccess });

    expect(mockWriteText).toHaveBeenCalledWith("test text");
    expect(onSuccess).toHaveBeenCalled();
  });

  test("calls onFailure when clipboard is not available", async () => {
    Object.defineProperty(navigator, "clipboard", { value: undefined });
    const onFailure = vi.fn();

    await copyToClipboard({ text: "test", onFailure });

    expect(onFailure).toHaveBeenCalled();
    expect(mockWriteText).not.toHaveBeenCalled();
  });

  test("calls onFailure when clipboard write fails", async () => {
    const error = new Error("Clipboard error");
    mockWriteText.mockRejectedValueOnce(error);
    const onFailure = vi.fn();

    await copyToClipboard({ text: "test", onFailure });

    expect(onFailure).toHaveBeenCalledWith(error);
  });

  test("uses default failure handler when not provided", async () => {
    const consoleSpy = vi.spyOn(console, "warn");
    Object.defineProperty(navigator, "clipboard", { value: undefined });

    await copyToClipboard({ text: "test" });

    expect(consoleSpy).toHaveBeenCalledWith(
      "Copying to clipboard not supported",
    );
  });

  test("uses noop success handler when not provided", async () => {
    mockWriteText.mockResolvedValueOnce(undefined);

    await copyToClipboard({ text: "test" });

    expect(mockWriteText).toHaveBeenCalledWith("test");
  });
});
