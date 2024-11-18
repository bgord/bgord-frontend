import { beforeEach, describe, expect, test, vi } from "vitest";
import {
  emptyImageResolution,
  getImageResolution,
} from "../get-image-resolution";

describe("getImageResolution", () => {
  let imgElement: HTMLImageElement;

  beforeEach(() => {
    imgElement = document.createElement("img");
    vi.spyOn(document, "createElement").mockReturnValue(imgElement);
  });

  test("returns empty resolution for undefined path", async () => {
    const result = await getImageResolution(undefined);
    expect(result).toEqual(emptyImageResolution);
  });

  test("resolves with correct dimensions on image load", async () => {
    const mockDimensions = { width: 100, height: 200 };

    const resolutionPromise = getImageResolution("test.jpg");

    // Simulate image load
    Object.defineProperty(imgElement, "width", { value: mockDimensions.width });
    Object.defineProperty(imgElement, "height", {
      value: mockDimensions.height,
    });
    imgElement.onload?.(new Event("load"));

    const result = await resolutionPromise;
    expect(result).toEqual(mockDimensions);
    expect(imgElement.src).toEqual("http://localhost:3000/test.jpg");
  });

  test("rejects on image load error", async () => {
    const resolutionPromise = getImageResolution("invalid.jpg");

    imgElement.onerror?.(new Event("error"));

    await expect(resolutionPromise).rejects.toBeInstanceOf(Event);
  });
});
