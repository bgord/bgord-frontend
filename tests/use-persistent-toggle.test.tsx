import { act, fireEvent, render, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { usePersistentToggle } from "../hooks/use-persistent-toggle";
import { SafeLocalStorage } from "../safe-local-storage";

vi.mock("../safe-local-storage", () => ({
  SafeLocalStorage: {
    get: vi.fn(),
    set: vi.fn(),
    clear: vi.fn(),
  },
}));

describe("usePersistentToggle", () => {
  const TEST_KEY = "test-key";

  beforeEach(() => vi.clearAllMocks());

  test("works in component context", () => {
    function TestComponent() {
      const toggle = usePersistentToggle("test-persist");
      return (
        <div>
          <button type="button" onClick={toggle.toggle} data-testid="toggle">
            Toggle
          </button>
          <button type="button" onClick={toggle.clear} data-testid="clear">
            Clear
          </button>
          <div data-testid="status">{toggle.on ? "on" : "off"}</div>
        </div>
      );
    }

    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId("status")).toHaveTextContent("off");

    fireEvent.click(getByTestId("toggle"));
    expect(getByTestId("status")).toHaveTextContent("on");
    expect(SafeLocalStorage.set).toHaveBeenCalledWith("test-persist", true);

    fireEvent.click(getByTestId("clear"));
    expect(SafeLocalStorage.clear).toHaveBeenCalledWith("test-persist");
  });

  test("initializes with stored value", () => {
    vi.mocked(SafeLocalStorage.get).mockReturnValue(true);
    const { result } = renderHook(() => usePersistentToggle(TEST_KEY));

    expect(result.current.on).toBe(true);
    expect(SafeLocalStorage.get).toHaveBeenCalledWith(TEST_KEY, false);
  });

  test("initializes with default value when no stored value", () => {
    vi.mocked(SafeLocalStorage.get).mockReturnValue(false);
    const { result } = renderHook(() => usePersistentToggle(TEST_KEY, false));

    expect(result.current.on).toBe(false);
    expect(SafeLocalStorage.get).toHaveBeenCalledWith(TEST_KEY, false);
  });

  test("persists state changes", () => {
    vi.mocked(SafeLocalStorage.get).mockReturnValue(false);
    const { result } = renderHook(() => usePersistentToggle(TEST_KEY));

    act(() => {
      result.current.enable();
    });

    expect(SafeLocalStorage.set).toHaveBeenCalledWith(TEST_KEY, true);
  });

  test("clears stored value", () => {
    const { result } = renderHook(() => usePersistentToggle(TEST_KEY));

    act(() => {
      result.current.clear();
    });

    expect(SafeLocalStorage.clear).toHaveBeenCalledWith(TEST_KEY);
  });

  test("updates storage when key changes", () => {
    const { rerender } = renderHook(({ key }) => usePersistentToggle(key), {
      initialProps: { key: TEST_KEY },
    });

    const NEW_KEY = "new-key";
    rerender({ key: NEW_KEY });

    expect(SafeLocalStorage.get).toHaveBeenCalledWith(NEW_KEY, false);
  });

  test("retains useToggle functionality", () => {
    const { result } = renderHook(() => usePersistentToggle(TEST_KEY));

    act(() => {
      result.current.toggle();
    });
    expect(result.current.on).toBe(true);

    act(() => {
      result.current.disable();
    });
    expect(result.current.on).toBe(false);
  });
});
