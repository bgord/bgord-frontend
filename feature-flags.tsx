/**
 * Feature flags context and hooks for React
 * @module FeatureFlags
 */
import { createContext, useContext } from "react";

/**
 * Feature flag values
 */
export enum FeatureFlagEnum {
  yes = "yes",
  no = "no",
}

type FeatureFlagNameType = string;

type FeatureFlagsContextValueType = {
  flags: Record<FeatureFlagNameType, FeatureFlagEnum>;
};

type FeatureFlagsContextPropsType = {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  value: FeatureFlagsContextValueType["flags"];
};

const FeatureFlagsContext = createContext<
  FeatureFlagsContextValueType["flags"]
>({});

/**
 * Context provider for feature flags
 * @param props.children - Child components
 * @param props.value - Feature flags configuration object
 */
export function FeatureFlagsContextProvider(
  props: FeatureFlagsContextPropsType,
) {
  return (
    <FeatureFlagsContext.Provider value={props.value}>
      {props.children}
    </FeatureFlagsContext.Provider>
  );
}

/**
 * Hook to access all feature flags
 * @returns Record of feature flag values
 * @throws {Error} When used outside provider
 */
export function useFeatureFlags() {
  const value = useContext(FeatureFlagsContext);

  if (value === undefined) {
    throw new Error(
      "useFeatureFlags must be used within the FeatureFlagsContext",
    );
  }

  return value;
}

/**
 * Hook to check single feature flag
 * @param name - Feature flag name to check
 * @returns Boolean indicating if feature is enabled
 * @throws {Error} When used outside provider
 */
export function useFeatureFlag(name: FeatureFlagNameType): boolean {
  const value = useContext(FeatureFlagsContext);

  if (value === undefined) {
    throw new Error(
      "useFeatureFlag must be used within the FeatureFlagsContext",
    );
  }

  return value[name] === "yes";
}
