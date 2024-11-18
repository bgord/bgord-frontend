import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { getSafeWindow } from "../safe-window";

describe("Window utilities", () => {
  const originalWindow = global.window;

  beforeEach(() => vi.resetModules());

  afterEach(() => {
    global.window = originalWindow;
  });

  describe("getSafeWindow", () => {
    test("returns window when available", () => {
      global.window = {} as Window & typeof globalThis;
      expect(getSafeWindow()).toBe(window);
    });

    test("returns undefined when window is not available", () => {
      global.window = undefined as any;
      expect(getSafeWindow()).toBeUndefined();
    });
  });
});
