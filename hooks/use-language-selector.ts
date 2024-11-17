import type { LanguageType } from "@bgord/node/dist/schema";
import Cookies from "js-cookie";
import React from "react";

import { getSafeWindow } from "../safe-window";
import { useLanguage } from "../translations";
import { Field } from "./field";
import { useClientFilterReturnType, useClientFilter } from "./use-client-filter";

export function useLanguageSelector(
  supportedLanguages: Record<LanguageType, LanguageType>,
): useClientFilterReturnType<LanguageType> {
  const language = useLanguage();

  const field = useClientFilter<LanguageType>({
    enum: supportedLanguages,
    defaultValue: language,
    name: "language",
  });

  React.useEffect(() => {
    const safeWindow = getSafeWindow();

    if (!safeWindow) return;

    const current = new Field(field.currentValue);

    if (!current.isEmpty() && field.changed) {
      Cookies.set("accept-language", String(current.get()));
      safeWindow.document.location.reload();
    }
  }, [field.currentValue, field.changed]);

  return field;
}
