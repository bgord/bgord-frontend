/// <reference types="react" />
import type { TranslationsType, Schema } from "@bgord/node";
import { PluralizeOptionsType } from "./pluralize";
declare type TranslationsContextValueType = {
    translations: TranslationsType;
    language: Schema.LanguageType;
};
declare type TranslationsContextPropsType = {
    children: JSX.Element | JSX.Element[];
    value: TranslationsContextValueType;
};
export declare function TranslationsContextProvider(props: TranslationsContextPropsType): JSX.Element;
export declare function useTranslations(): (key: string) => string;
export declare function useLanguage(): TranslationsContextValueType["language"];
export declare function usePluralize(): (options: Omit<PluralizeOptionsType, "language">) => string;
export {};
