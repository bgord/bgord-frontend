import type { LanguageType } from "@bgord/node/dist/schema";
import Cookies from "js-cookie";

import { getSafeWindow } from "../safe-window";
import { useLanguage } from "../translations";
import {
  QueryValue,
  useClientFilter,
  UseClientFilterReturnType,
} from "./use-client-filter";

export function useLanguageSelector(
  supportedLanguages: Record<LanguageType, LanguageType>,
): UseClientFilterReturnType<LanguageType> {
  const language = useLanguage();

  return useClientFilter({
    enum: supportedLanguages,
    givenQuery: language,
    name: "language",
    onUpdate: (_current, _previous) => {
      const safeWindow = getSafeWindow();

      if (!safeWindow) return;

      const current = new QueryValue(_current);
      const previous = new QueryValue(_previous);

      if (
        !current.isEmpty() &&
        !previous.isEmpty() &&
        !previous.equals(current)
      ) {
        Cookies.set("accept-language", String(current.get()));
        safeWindow.document.location.reload();
      }
    },
  });
}
