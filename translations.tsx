import React from "react";
import type { TranslationsType } from "@bgord/node";

const TranslationsContext = React.createContext<TranslationsType>({});

type TranslationsContextPropsType = {
  children: JSX.Element | JSX.Element[];
  translations: TranslationsType;
};

export function TranslationsContextProvider(
  props: TranslationsContextPropsType
) {
  return (
    <TranslationsContext.Provider value={props.translations}>
      {props.children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations() {
  const translations = React.useContext(TranslationsContext);

  if (translations === undefined) {
    throw new Error(
      `useTranslations must be used within the TranslationsContext`
    );
  }

  function translate(key: string) {
    const result = translations[key];

    if (!result)
      console.warn(`[@bgord/frontend] missing translation for key ${key}.`);

    return result ?? key;
  }

  return translate;
}
