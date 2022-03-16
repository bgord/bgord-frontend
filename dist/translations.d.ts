/// <reference types="react" />
import type { TranslationsType } from "@bgord/node";
declare type TranslationsContextPropsType = {
    children: JSX.Element | JSX.Element[];
    translations: TranslationsType;
};
export declare function TranslationsContextProvider(props: TranslationsContextPropsType): JSX.Element;
export declare function useTranslations(): (key: string) => string;
export {};
