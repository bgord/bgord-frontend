import type { Schema } from "@bgord/node";
export type FeatureFlagNameType = string;
export type FeatureFlagsContextValueType = {
    flags: Record<FeatureFlagNameType, Schema.FeatureFlagType>;
};
type FeatureFlagsContextPropsType = {
    children: JSX.Element | JSX.Element[];
    value: FeatureFlagsContextValueType["flags"];
};
export declare function FeatureFlagsContextProvider(props: FeatureFlagsContextPropsType): JSX.Element;
export declare function useFeatureFlags(): Record<string, Schema.FeatureFlagEnum>;
export declare function useFeatureFlag(name: FeatureFlagNameType): boolean;
export {};
