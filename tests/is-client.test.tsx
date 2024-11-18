import { vi, describe, test, expect, beforeEach, afterEach } from "vitest";
import { isClient } from "../is-client";

describe("Window utilities", () => {
  const originalWindow = global.window;

  beforeEach(() => vi.resetModules());

  afterEach(() => (global.window = originalWindow));

  describe("isClient", () => {
    test("returns false when window is available", () => {
      global.window = {} as Window & typeof globalThis;
      expect(isClient()).toBe(false);
    });

    test("returns true when window is not available", () => {
      global.window = undefined as any;
      expect(isClient()).toBe(true);
    });
  });
});
