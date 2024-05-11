import type { LanguageType } from "@bgord/node/dist/schema";
import Cookies from "js-cookie";

import { getSafeWindow } from "../safe-window";
import { useLanguage } from "../translations";
import { useClientFilter, UseClientFilterReturnType } from "./use-client-filter";

export function useLanguageSelector(
  supportedLanguages: Record<LanguageType, LanguageType>
): UseClientFilterReturnType<LanguageType> {
  const language = useLanguage();

  return useClientFilter({
    enum: supportedLanguages,
    currentQuery: language,
    name: "language",
    onUpdate: (current, previous) => {
      const safeWindow = getSafeWindow();

      if (!safeWindow) return;

      if (!(current && previous ) || previous === current) return;

      Cookies.set("accept-language", current);
      safeWindow.document.location.reload();
    },
  });
}
