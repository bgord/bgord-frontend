import React from "react";
import { screen, renderHook, render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import {
  FeatureFlagsContextProvider,
  useFeatureFlags,
  useFeatureFlag,
  FeatureFlagEnum,
} from "../feature-flags";

describe("Feature Flags", () => {
  describe("FeatureFlagsContextProvider", () => {
    test("renders children with provided flags", () => {
      const flags = { testFlag: FeatureFlagEnum.yes };

      render(
        <FeatureFlagsContextProvider value={flags}>
          <div>Test Child</div>
        </FeatureFlagsContextProvider>
      );
      expect(screen.getByText("Test Child")).toBeInTheDocument();
    });
  });

  describe("useFeatureFlags", () => {
    test("returns all feature flags", () => {
      const flags = { flag1: FeatureFlagEnum.yes, flag2: FeatureFlagEnum.no };

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <FeatureFlagsContextProvider value={flags}>
          {children}
        </FeatureFlagsContextProvider>
      );

      const { result } = renderHook(() => useFeatureFlags(), { wrapper });
      expect(result.current).toEqual(flags);
    });
  });

  describe("useFeatureFlag", () => {
    test('returns true for "yes" flags', () => {
      const flags = { testFlag: FeatureFlagEnum.yes };
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <FeatureFlagsContextProvider value={flags}>
          {children}
        </FeatureFlagsContextProvider>
      );

      const { result } = renderHook(() => useFeatureFlag("testFlag"), {
        wrapper,
      });
      expect(result.current).toBe(true);
    });

    test('returns false for "no" flags', () => {
      const flags = { testFlag: FeatureFlagEnum.no };
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <FeatureFlagsContextProvider value={flags}>
          {children}
        </FeatureFlagsContextProvider>
      );

      const { result } = renderHook(() => useFeatureFlag("testFlag"), {
        wrapper,
      });
      expect(result.current).toBe(false);
    });

    test("returns false for undefined flags", () => {
      const flags = {} as Record<string, FeatureFlagEnum>;
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <FeatureFlagsContextProvider value={flags}>
          {children}
        </FeatureFlagsContextProvider>
      );

      const { result } = renderHook(() => useFeatureFlag("nonexistentFlag"), {
        wrapper,
      });
      expect(result.current).toBe(false);
    });
  });
});
