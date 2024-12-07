import type { Params } from "react-router-dom";

import { copyToClipboard } from "./copy-to-clipboard";
import { DateFormatter } from "./date-formatter";
import { DurationFormatter } from "./durations";
import { ETag, WeakETag, addWeakEtagRevision } from "./etag";
import { exec } from "./exec";
import {
  FeatureFlagEnum,
  FeatureFlagsContextProvider,
  useFeatureFlag,
  useFeatureFlags,
} from "./feature-flags";
import { FilterUrl } from "./filter-url";
import { Form } from "./form";
import { getImageResolution } from "./get-image-resolution";
import { isClient } from "./is-client";
import { LineClamp } from "./line-clamp";
import { Approximation, MinMaxScaler } from "./min-max-scaler";
import { noop } from "./noop";
import { pluralize } from "./pluralize";
import { useReordering } from "./reordering";
import { Rhythm } from "./rhythm";
import { SafeLocalStorage } from "./safe-local-storage";
import { getSafeWindow } from "./safe-window";
import { ServerError } from "./server-error";
import { Sorts } from "./sorts";
import { ThousandsSeparator } from "./thousands-separator";
import { Time } from "./time";
import { ToastsContextProvider, useToastTrigger, useToastsContext } from "./toasts";
import { TranslationsContextProvider, useLanguage, usePluralize, useTranslations } from "./translations";

export {
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
  DurationFormatter,
  exec,
  pluralize,
  FeatureFlagEnum,
  useFeatureFlag,
  useFeatureFlags,
  FeatureFlagsContextProvider,
  SafeLocalStorage,
  ETag,
  WeakETag,
  addWeakEtagRevision,
  getImageResolution,
  MinMaxScaler,
  Approximation,
  useReordering,
  ServerError,
};

export * from "./components";
export * from "./hooks";
export type Context = { request: Request };
export type ContextWithParams<T extends string> = Context & {
  params: Params<T>;
};
export type { BaseToastType } from "./toasts";
export type { CopyToClipboardOptionsType } from "./copy-to-clipboard";
