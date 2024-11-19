import { act, fireEvent, render, renderHook } from "@testing-library/react";
import Cookies from "js-cookie";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { useLanguageSelector } from "../hooks/use-language-selector";
import { getSafeWindow } from "../safe-window";
import { useLanguage } from "../translations";

vi.mock("../translations", () => ({
  useLanguage: vi.fn(),
}));

vi.mock("js-cookie", () => ({
  default: {
    set: vi.fn(),
  },
}));

vi.mock("../safe-window", () => ({
  getSafeWindow: vi.fn(),
}));

describe("useLanguageSelector", () => {
  const supportedLanguages = {
    en: "en",
    pl: "pl",
  } as const;

  const mockWindow = {
    document: {
      location: {
        reload: vi.fn(),
      },
    },
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useLanguage).mockReturnValue("en");
    // @ts-ignore
    vi.mocked(getSafeWindow).mockReturnValue(mockWindow);
  });

  test("initializes with current language", () => {
    const { result } = renderHook(() => useLanguageSelector(supportedLanguages), {
      wrapper: createWrapper(),
    });
    expect(result.current.currentValue).toBe("en");
  });

  test("updates language selection", async () => {
    const { result } = renderHook(() => useLanguageSelector(supportedLanguages), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      result.current.set("pl");
    });

    expect(Cookies.set).toHaveBeenCalledWith("accept-language", "pl");
    expect(mockWindow.document.location.reload).toHaveBeenCalled();
  });

  test("handles no window object", async () => {
    // @ts-ignore
    vi.mocked(getSafeWindow).mockReturnValue(null);
    const { result } = renderHook(() => useLanguageSelector(supportedLanguages), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      result.current.set("pl");
    });

    expect(Cookies.set).not.toHaveBeenCalled();
  });

  test("only updates when value changes", async () => {
    const { result } = renderHook(() => useLanguageSelector(supportedLanguages), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      result.current.set("en"); // Same as current value
    });

    expect(Cookies.set).not.toHaveBeenCalled();
    expect(mockWindow.document.location.reload).not.toHaveBeenCalled();
  });

  test("component integration", () => {
    function TestComponent() {
      const languageSelector = useLanguageSelector(supportedLanguages);
      return (
        <div>
          <select
            value={languageSelector.currentValue}
            onChange={(e) => languageSelector.set(e.target.value as keyof typeof supportedLanguages)}
            data-testid="language-select"
          >
            {Object.keys(supportedLanguages).map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      );
    }

    const { getByTestId } = render(<TestComponent />, {
      wrapper: createWrapper(),
    });
    const select = getByTestId("language-select");

    expect(select).toHaveValue("en");

    fireEvent.change(select, { target: { value: "pl" } });

    expect(Cookies.set).toHaveBeenCalledWith("accept-language", "pl");
    expect(mockWindow.document.location.reload).toHaveBeenCalled();
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
