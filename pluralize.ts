import type { Falsy, Schema } from "@bgord/node";

type PluralizeWordType = string;
type PluralizeValueType = Falsy<number>;

type PluralizeOptionsType = {
  value: PluralizeValueType;
  singular: PluralizeWordType;
  plural?: PluralizeWordType;
  language: Schema.LanguageType;
};

export function pluralize(options: PluralizeOptionsType): PluralizeWordType {
  if (options.language !== "en") {
    console.warn(
      `[@bgord/frontend] missing pluralization fuction for language ${options.language}.`
    );

    return options.singular;
  }

  const plural = options.plural ?? `${options.singular}s`;

  if (options.value === 1) return options.singular;
  return plural;
}
