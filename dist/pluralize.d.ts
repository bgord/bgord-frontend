import type { Falsy, Schema } from "@bgord/node";
declare type PluralizeWordType = string;
declare type PluralizeValueType = Falsy<number>;
export declare type PluralizeOptionsType = {
    value: PluralizeValueType;
    singular: PluralizeWordType;
    plural?: PluralizeWordType;
    genitive?: PluralizeWordType;
    language: Schema.LanguageType;
};
export declare function pluralize(options: PluralizeOptionsType): PluralizeWordType;
export {};
