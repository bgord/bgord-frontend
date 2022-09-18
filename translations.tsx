import React from "react";
import type { TranslationsType } from "@bgord/node";

type TranslationsContextValueType = {
  translations: TranslationsType;
};

const TranslationsContext = React.createContext<TranslationsContextValueType>({
  translations: {},
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
