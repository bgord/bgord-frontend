import type { LanguageType } from "@bgord/node/dist/schema";
import { UseFilterReturnType } from "./use-filter";
export declare function useLanguageSelector(supportedLanguages: Record<LanguageType, LanguageType>): UseFilterReturnType<LanguageType>;
