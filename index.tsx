import type { Params } from "react-router-dom";

export * from "./api";
export * from "./components";
export * from "./copy-to-clipboard";
export * from "./durations";
export * from "./etag";
export * from "./exec";
export * from "./feature-flags";
export * from "./get-image-resolution";
export * from "./hooks";
export * from "./is-client";
export * from "./min-max-scaler";
export * from "./pluralize";
export * from "./reordering";
export * from "./safe-local-storage";
export * from "./safe-window";
export * from "./server-error";
export * from "./sorts";
export * from "./thousands-separator";
export * from "./time";

export type Context = { request: Request };
export type ContextWithParams<T extends string> = Context & {
  params: Params<T>;
};

// TESTED
import { noop } from "./noop";
import { DateFormatter } from "./date-formatter";
import { FilterUrl } from "./filter-url";
import { Form } from "./form";
import { LineClamp } from "./line-clamp";
import { Rhythm } from "./rhythm";
import {
  ToastsContextProvider,
  useToastTrigger,
  useToastsContext,
} from "./toasts";
import {
  TranslationsContextProvider,
  useLanguage,
  usePluralize,
  useTranslations,
} from "./translations";

export const tested = {
  LineClamp,
  FilterUrl,
  Form,
  Rhythm,
  DateFormatter,
  TranslationsContextProvider,
  useLanguage,
  usePluralize,
  useTranslations,
  useToastTrigger,
  useToastsContext,
  ToastsContextProvider,
  noop,
};

export type { BaseToastType } from "./toasts";
