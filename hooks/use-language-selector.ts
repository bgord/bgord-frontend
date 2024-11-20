import type { LanguageType } from "@bgord/node/dist/schema";
import Cookies from "js-cookie";
import { useCallback, useEffect } from "react";
import { getSafeWindow } from "../safe-window";
import { useLanguage } from "../translations";
import { Field } from "./field";
import { useClientFilter, useClientFilterReturnType } from "./use-client-filter";

/**
 * Hook for language selection with cookie persistence
 *
 * @example
 * ```tsx
 * const languages = { en: "en", pl: "pl" };
 * const languageSelector = useLanguageSelector(languages);
 * ```
 */
export function useLanguageSelector(
  supportedLanguages: Record<LanguageType, LanguageType>,
): useClientFilterReturnType<LanguageType> {
  const language = useLanguage();

  const field = useClientFilter<LanguageType>({
    enum: supportedLanguages,
    defaultValue: language,
    name: "language",
  });

  const handleLanguageChange = useCallback(() => {
    const safeWindow = getSafeWindow();
    if (!safeWindow) return;

    const current = new Field(field.currentValue);
    if (!current.isEmpty() && field.changed) {
      Cookies.set("accept-language", String(current.get()));
      safeWindow.document.location.reload();
    }
  }, [field.currentValue, field.changed]);

  useEffect(() => {
    handleLanguageChange();
  }, [handleLanguageChange]);

  return field;
}
