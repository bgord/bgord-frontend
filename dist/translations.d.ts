/// <reference types="react" />
import type { TranslationsType, TranslationsKeyType, Schema } from "@bgord/node";
import { PluralizeOptionsType } from "./pluralize";
type TranslationsContextValueType = {
    translations: TranslationsType;
    language: Schema.LanguageType;
};
type TranslationPlaceholderType = string;
type TranslationPlaceholderValueType = string | number;
type TranslationVariableType = Record<TranslationPlaceholderType, TranslationPlaceholderValueType>;
type TranslationsContextPropsType = {
    children: JSX.Element | JSX.Element[];
    value: TranslationsContextValueType;
};
export declare function TranslationsContextProvider(props: TranslationsContextPropsType): JSX.Element;
export declare function useTranslations(): (key: TranslationsKeyType, variables?: TranslationVariableType) => string;
export declare function useLanguage(): TranslationsContextValueType["language"];
export declare function usePluralize(): (options: Omit<PluralizeOptionsType, "language">) => string;
export {};
