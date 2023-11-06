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
export declare function pluralize(options: PluralizeOptionsType): PluralizeWordType;
export {};
