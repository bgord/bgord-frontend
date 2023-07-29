import Cookies from "js-cookie";

import { getSafeWindow } from "../safe-window";
import { useLanguage } from "../translations";
import { useFilter } from "./use-filter";

export function useLanguageSelector(
  supportedLanguages: Record<string, string>
) {
  const language = useLanguage();

  return useFilter({
    enum: supportedLanguages,
    currentQuery: language,
    label: "language",
    onUpdate: (current, previous) => {
      const safeWindow = getSafeWindow();

      if (!safeWindow) return;

      if (!current || !previous || previous === current) return;

      Cookies.set("accept-language", current);
      safeWindow.document.location.reload();
    },
  });
}
