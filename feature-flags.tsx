import { createContext, useContext } from "react";

export enum FeatureFlagEnum {
  yes = "yes",
  no = "no",
}

export type FeatureFlagNameType = string;

export type FeatureFlagsContextValueType = {
  flags: Record<FeatureFlagNameType, FeatureFlagEnum>;
};

type FeatureFlagsContextPropsType = {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  value: FeatureFlagsContextValueType["flags"];
};

const FeatureFlagsContext = createContext<FeatureFlagsContextValueType["flags"]>({});

export function FeatureFlagsContextProvider(props: FeatureFlagsContextPropsType) {
  return <FeatureFlagsContext.Provider value={props.value}>{props.children}</FeatureFlagsContext.Provider>;
}

export function useFeatureFlags() {
  const value = useContext(FeatureFlagsContext);

  if (value === undefined) {
    throw new Error("useFeatureFlags must be used within the FeatureFlagsContext");
  }

  return value;
}

export function useFeatureFlag(name: FeatureFlagNameType): boolean {
  const value = useContext(FeatureFlagsContext);

  if (value === undefined) {
    throw new Error("useFeatureFlag must be used within the FeatureFlagsContext");
  }

  return value[name] === "yes";
}
