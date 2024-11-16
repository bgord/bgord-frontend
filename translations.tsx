import type {
  Schema,
  TranslationsKeyType,
  TranslationsType,
} from "@bgord/node";
import { PluralizeOptionsType, pluralize } from "./pluralize";

import { createContext, useCallback, useContext } from "react";

/**
 * Represents the shape of translation string placeholders
 * @example '{{name}}', '{{count}}'
 */
type TranslationPlaceholderType = string;

/**
 * Type for values that can be injected into translation placeholders
 */
type TranslationPlaceholderValueType = string | number;

/**
 * Dictionary of placeholder replacements for translations
 * @example { name: 'John', count: 5 }
 */
type TranslationVariableType = Record<
  TranslationPlaceholderType,
  TranslationPlaceholderValueType
>;

/**
 * Value type for the translations context
 */
export type TranslationsContextValueType = {
  /** Dictionary of translation strings */
  translations: TranslationsType;
  /** Current active language */
  language: Schema.LanguageType;
};

/**
 * Creates the translations context with default English language
 */
const TranslationsContext = createContext<TranslationsContextValueType>({
  translations: {},
  language: "en",
});

/**
 * Props for the TranslationsContextProvider component
 */
type TranslationsContextPropsType = {
  /** Child components that will have access to translations */
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  /** Translation context configuration */
  value: TranslationsContextValueType;
};

/**
 * Provider component for the translations context
 * Wraps children with access to translations and current language
 *
 * @example
 * ```tsx
 * // Basic usage
 * <TranslationsContextProvider
 *   value={{ translations: myTranslations, language: 'en' }}
 * >
 *   <App />
 * </TranslationsContextProvider>
 * ```
 */
export function TranslationsContextProvider(
  props: TranslationsContextPropsType,
) {
  return (
    <TranslationsContext.Provider value={props.value}>
      {props.children}
    </TranslationsContext.Provider>
  );
}

/**
 * Hook to access translation function within components
 * Must be used within a TranslationsContextProvider
 *
 * @returns A translate function that accepts a key and optional variables
 *
 * @example
 * ```tsx
 * // Basic usage
 * const translate = useTranslations();
 * return <p>{translate('greeting')}</p>
 *
 * // With variables
 * const translate = useTranslations();
 * return <p>{translate('welcome', { name: 'John' })}</p>
 * ```
 *
 * @throws {Error} If used outside of TranslationsContextProvider
 */
export function useTranslations() {
  const value = useContext(TranslationsContext);

  if (value === undefined) {
    throw new Error(
      "useTranslations must be used within the TranslationsContext",
    );
  }

  const translate = useCallback(
    (key: TranslationsKeyType, variables?: TranslationVariableType) => {
      const translation = value.translations[key];

      if (!translation) {
        console.warn(`[@bgord/frontend] missing translation for key: ${key}`);
        return key;
      }

      if (!variables) return translation;

      // Safe variable replacement with regex
      return Object.entries(variables).reduce(
        (result, [placeholder, value]) => {
          // Create regex for each placeholder to prevent partial replacements
          const regex = new RegExp(`{{${placeholder}}}`, "g");
          return result.replace(regex, String(value));
        },
        translation,
      );
    },
    [value.translations],
  );

  return translate;
}

/**
 * Hook to access current language within components
 * Must be used within a TranslationsContextProvider
 *
 * @returns Current language code
 *
 * @example
 * ```tsx
 * const language = useLanguage();
 * return <p>Current language: {language}</p>
 * ```
 *
 * @throws {Error} If used outside of TranslationsContextProvider
 */
export function useLanguage(): TranslationsContextValueType["language"] {
  const value = useContext(TranslationsContext);

  if (value === undefined) {
    throw new Error("useLanguage must be used within the TranslationsContext");
  }

  return value.language;
}

export function usePluralize() {
  const language = useLanguage();

  return (options: Omit<PluralizeOptionsType, "language">) =>
    pluralize({ ...options, language });
}
