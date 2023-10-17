/// <reference types="react" />
import type { Schema } from "@bgord/node";
export declare type FeatureFlagNameType = string;
export declare type FeatureFlagsContextValueType = {
    flags: Record<FeatureFlagNameType, Schema.FeatureFlagType>;
};
declare type FeatureFlagsContextPropsType = {
    children: JSX.Element | JSX.Element[];
    value: FeatureFlagsContextValueType["flags"];
};
export declare function FeatureFlagsContextProvider(props: FeatureFlagsContextPropsType): JSX.Element;
export declare function useFeatureFlags(): Record<string, "yes" | "no">;
export declare function useFeatureFlag(name: FeatureFlagNameType): boolean;
export {};
