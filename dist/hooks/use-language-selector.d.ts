import type { LanguageType } from "@bgord/node/dist/schema";
import { UseClientFilterReturnType } from "./use-client-filter";
export declare function useLanguageSelector(supportedLanguages: Record<LanguageType, LanguageType>): UseClientFilterReturnType<LanguageType>;
