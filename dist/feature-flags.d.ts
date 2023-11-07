import type { Schema } from "@bgord/node";
import React from "react";
export type FeatureFlagNameType = string;
export type FeatureFlagsContextValueType = {
    flags: Record<FeatureFlagNameType, Schema.FeatureFlagType>;
};
type FeatureFlagsContextPropsType = {
    children: JSX.Element | JSX.Element[];
    value: FeatureFlagsContextValueType["flags"];
};
export declare function FeatureFlagsContextProvider(props: FeatureFlagsContextPropsType): React.JSX.Element;
export declare function useFeatureFlags(): Record<string, "yes" | "no">;
export declare function useFeatureFlag(name: FeatureFlagNameType): boolean;
export {};
