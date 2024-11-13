import React from "react";
import type { LanguageType } from "@bgord/node/dist/schema";
import Cookies from "js-cookie";

import { getSafeWindow } from "../safe-window";
import { useLanguage } from "../translations";
import { Field } from "./field";
import {
  useNewClientFilter,
  UseNewClientFilterReturnType,
} from "./use-new-client-filter";

export function useLanguageSelector(
  supportedLanguages: Record<LanguageType, LanguageType>,
): UseNewClientFilterReturnType<LanguageType> {
  const language = useLanguage();

  const field = useNewClientFilter<LanguageType>({
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
  }, [field.currentValue]);

  return field;
}
