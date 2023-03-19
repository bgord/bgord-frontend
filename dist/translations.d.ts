/// <reference types="react" />
import type { TranslationsType, TranslationsKeyType, Schema } from "@bgord/node";
import { PluralizeOptionsType } from "./pluralize";
declare type TranslationsContextValueType = {
    translations: TranslationsType;
    language: Schema.LanguageType;
};
declare type TranslationPlaceholderType = string;
declare type TranslationPlaceholderValueType = string | number;
declare type TranslationVariableType = Record<TranslationPlaceholderType, TranslationPlaceholderValueType>;
declare type TranslationsContextPropsType = {
    children: JSX.Element | JSX.Element[];
    value: TranslationsContextValueType;
};
export declare function TranslationsContextProvider(props: TranslationsContextPropsType): JSX.Element;
export declare function useTranslations(): (key: TranslationsKeyType, variables?: TranslationVariableType | undefined) => string;
export declare function useLanguage(): TranslationsContextValueType["language"];
export declare function usePluralize(): (options: Omit<PluralizeOptionsType, "language">) => string;
export {};
