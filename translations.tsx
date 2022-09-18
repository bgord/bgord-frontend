import React from "react";
import type { TranslationsType, Schema } from "@bgord/node";
import { pluralize, PluralizeOptionsType } from "./pluralize";

type TranslationsContextValueType = {
  translations: TranslationsType;
  language: Schema.LanguageType;
};

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

  function translate(key: string) {
    const result = value.translations[key];

    if (!result)
      console.warn(`[@bgord/frontend] missing translation for key ${key}.`);

    return result ?? key;
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
