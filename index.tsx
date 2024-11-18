import type { Params } from "react-router-dom";

export * from "./api";
export * from "./components";
export * from "./durations";
export * from "./etag";
export * from "./exec";
export * from "./feature-flags";
export * from "./get-image-resolution";
export * from "./hooks";
export * from "./min-max-scaler";
export * from "./pluralize";
export * from "./reordering";
export * from "./safe-local-storage";
export * from "./server-error";

export type Context = { request: Request };
export type ContextWithParams<T extends string> = Context & {
  params: Params<T>;
};

// TESTED
import { copyToClipboard } from "./copy-to-clipboard";
import { DateFormatter } from "./date-formatter";
import { FilterUrl } from "./filter-url";
import { Form } from "./form";
import { LineClamp } from "./line-clamp";
import { noop } from "./noop";
import { Rhythm } from "./rhythm";
import { Sorts } from "./sorts";
import { ThousandsSeparator } from "./thousands-separator";
import { Time } from "./time";
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
import { getSafeWindow } from "./safe-window";
import { isClient } from "./is-client";

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
  ThousandsSeparator,
  Time,
  Sorts,
  copyToClipboard,
  getSafeWindow,
  isClient,
};

export type { BaseToastType } from "./toasts";
