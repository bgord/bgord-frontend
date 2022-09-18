import type { Falsy, Schema } from "@bgord/node";
declare type PluralizeWordType = string;
declare type PluralizeValueType = Falsy<number>;
declare type PluralizeOptionsType = {
    value: PluralizeValueType;
    singular: PluralizeWordType;
    plural?: PluralizeWordType;
    language: Schema.LanguageType;
};
export declare function pluralize(options: PluralizeOptionsType): PluralizeWordType;
export {};
