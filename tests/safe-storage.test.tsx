import * as Storage from "ts-storage";
import { describe, expect, test, vi } from "vitest";
import { SafeLocalStorage } from "../safe-local-storage";

vi.mock("ts-storage", () => ({ get: vi.fn(), set: vi.fn(), remove: vi.fn() }));

describe("SafeLocalStorage", () => {
  test("get returns value from storage with fallback", () => {
    vi.mocked(Storage.get).mockReturnValue({
      status: "OK" as Storage.Status,
      value: "test-value",
    });

    const result = SafeLocalStorage.get("test-key", "fallback");

    expect(result).toBe("test-value");
    expect(Storage.get).toHaveBeenCalledWith("test-key", "fallback");
  });

  test("set stores value in storage", () => {
    SafeLocalStorage.set("test-key", "test-value");

    expect(Storage.set).toHaveBeenCalledWith("test-key", "test-value");
  });

  test("clear removes key from storage", () => {
    SafeLocalStorage.clear("test-key");

    expect(Storage.remove).toHaveBeenCalledWith("test-key");
  });

  test("handles different value types", () => {
    const cases = [
      { key: "number", value: 42 },
      { key: "boolean", value: true },
      { key: "object", value: { test: "value" } },
      { key: "array", value: [1, 2, 3] },
    ];

    cases.forEach(({ key, value }) => {
      vi.mocked(Storage.get).mockReturnValue({
        status: "OK" as Storage.Status,
        value,
      });
      expect(SafeLocalStorage.get(key, value)).toEqual(value);
    });
  });
});
