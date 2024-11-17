import { act, render, renderHook, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import {
  type BaseToastType,
  ToastsContextProvider,
  useToastsContext,
} from "../toasts";

describe("Toast Context & Hooks", () => {
  beforeEach(() => vi.useFakeTimers());

  afterEach(() => vi.useRealTimers());

  describe("ToastsContextProvider", () => {
    test("renders children correctly", () => {
      render(
        <ToastsContextProvider>
          <div data-testid="child">Child Content</div>
        </ToastsContextProvider>,
      );
      expect(screen.getByTestId("child")).toBeInTheDocument();
    });

    test("uses default timeout of 5000ms when not specified", () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ToastsContextProvider>{children}</ToastsContextProvider>
      );

      const { result } = renderHook(() => useToastsContext(), { wrapper });

      act(() => result.current[1].add({ message: "Test Toast" }));

      expect(result.current[0]).toHaveLength(1);

      act(() => vi.advanceTimersByTime(4999));
      expect(result.current[0]).toHaveLength(1);

      act(() => vi.advanceTimersByTime(1));
      expect(result.current[0]).toHaveLength(0);
    });

    test("respects custom timeout", () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ToastsContextProvider timeout={2000}>{children}</ToastsContextProvider>
      );

      const { result } = renderHook(() => useToastsContext(), { wrapper });

      act(() => result.current[1].add({ message: "Test Toast" }));
      act(() => vi.advanceTimersByTime(1999));

      expect(result.current[0]).toHaveLength(1);

      act(() => vi.advanceTimersByTime(1));

      expect(result.current[0]).toHaveLength(0);
    });
  });

  describe("useToastsContext", () => {
    test("throws error when used outside provider", () => {
      expect(() => renderHook(() => useToastsContext())).toThrowError(
        "useToasts must be used within the ToastsContextProvider",
      );
    });

    test("supports custom toast types", () => {
      type CustomToast = BaseToastType & { severity: "info" | "error" };

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ToastsContextProvider>{children}</ToastsContextProvider>
      );

      const { result } = renderHook(() => useToastsContext<CustomToast>(), {
        wrapper,
      });

      act(() =>
        result.current[1].add({ message: "Error Toast", severity: "error" }),
      );

      expect(result.current[0][0]?.severity).toBe("error");
    });
  });

  describe("Advanced Scenarios", () => {
    test("multiple toasts are removed independently", () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ToastsContextProvider timeout={1000}>{children}</ToastsContextProvider>
      );

      const { result } = renderHook(() => useToastsContext(), { wrapper });

      act(() => result.current[1].add({ message: "First Toast" }));
      act(() => vi.advanceTimersByTime(500));
      act(() => result.current[1].add({ message: "Second Toast" }));

      expect(result.current[0]).toHaveLength(2);

      act(() => vi.advanceTimersByTime(500));

      expect(result.current[0]).toHaveLength(1);
      expect(result.current[0][0]?.message).toBe("Second Toast");

      act(() => vi.advanceTimersByTime(500));

      expect(result.current[0]).toHaveLength(0);
    });

    test("manually removing toast cancels its timeout", () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ToastsContextProvider timeout={1000}>{children}</ToastsContextProvider>
      );

      const { result } = renderHook(() => useToastsContext(), { wrapper });

      act(() => result.current[1].add({ message: "Test Toast" }));

      const toast = result.current[0][0];

      act(() => result.current[1].remove(toast as BaseToastType));
      act(() => vi.advanceTimersByTime(1000));

      expect(result.current[0]).toHaveLength(0);
    });

    test("clearing toasts removes all timeouts", () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ToastsContextProvider timeout={1000}>{children}</ToastsContextProvider>
      );

      const { result } = renderHook(() => useToastsContext(), { wrapper });

      act(() => {
        result.current[1].add({ message: "Toast 1" });
        result.current[1].add({ message: "Toast 2" });
        result.current[1].add({ message: "Toast 3" });
      });
      act(() => result.current[1].clear());
      act(() => vi.advanceTimersByTime(1000));

      expect(result.current[0]).toHaveLength(0);
    });
  });
});
