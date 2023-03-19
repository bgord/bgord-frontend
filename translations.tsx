import React from "react";
import type {
  TranslationsType,
  TranslationsKeyType,
  Schema,
} from "@bgord/node";
import { pluralize, PluralizeOptionsType } from "./pluralize";

type TranslationsContextValueType = {
  translations: TranslationsType;
  language: Schema.LanguageType;
};

type TranslationPlaceholderType = string;
type TranslationPlaceholderValueType = string | number;
type TranslationVariableType = Record<
  TranslationPlaceholderType,
  TranslationPlaceholderValueType
>;

const TranslationsContext = React.createContext<TranslationsContextValueType>({
  translations: {},
  language: "en",
});

type TranslationsContextPropsType = {
  children: JSX.Element | JSX.Element[];
  value: TranslationsContextValueType;
};

export function TranslationsContextProvider(
  props: TranslationsContextPropsType
) {
  return (
    <TranslationsContext.Provider value={props.value}>
      {props.children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations() {
  const value = React.useContext(TranslationsContext);

  if (value === undefined) {
    throw new Error(
      `useTranslations must be used within the TranslationsContext`
    );
  }

  function translate(
    key: TranslationsKeyType,
    variables?: TranslationVariableType
  ) {
    const translation = value.translations[key];

    if (!translation) {
      console.warn(`[@bgord/frontend] missing translation for key: ${key}`);
      return key;
    }

    if (!variables) return translation;

    return Object.entries(variables).reduce(
      (result, [placeholder, value]) =>
        result.replace(`{{${placeholder}}}`, String(value)),
      translation
    );
  }

  return translate;
}

export function useLanguage(): TranslationsContextValueType["language"] {
  const value = React.useContext(TranslationsContext);

  if (value === undefined) {
    throw new Error(`useLanguage must be used within the TranslationsContext`);
  }

  return value.language;
}

export function usePluralize() {
  const language = useLanguage();

  return (options: Omit<PluralizeOptionsType, "language">) =>
    pluralize({ ...options, language });
}
