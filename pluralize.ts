import { polishPlurals } from "polish-plurals";
import type { Falsy, Schema } from "@bgord/node";

type PluralizeWordType = string;
type PluralizeValueType = Falsy<number>;

export type PluralizeOptionsType = {
  value: PluralizeValueType;
  singular: PluralizeWordType;
  plural?: PluralizeWordType;
  genitive?: PluralizeWordType;
  language: Schema.LanguageType;
};

enum PluralizationSupportedLanguages {
  en = "en",
  pl = "pl",
}

export function pluralize(options: PluralizeOptionsType): PluralizeWordType {
  if (options.language === PluralizationSupportedLanguages.en) {
    const plural = options.plural ?? `${options.singular}s`;

    if (options.value === 1) return options.singular;

    return plural;
  }

  if (options.language === PluralizationSupportedLanguages.pl) {
    const value = options.value ?? 1;

    if (value === 1) return options.singular;

    return polishPlurals(
      options.singular,
      String(options.plural),
      String(options.genitive),
      value,
    );
  }

  console.warn(
    `[@bgord/frontend] missing pluralization function for language ${options.language}.`,
  );

  return options.singular;
}
