import type { Params } from "react-router-dom";

export * from "./api";
export * from "./components";
export * from "./copy-to-clipboard";
export * from "./dates";
export * from "./durations";
export * from "./etag";
export * from "./exec";
export * from "./feature-flags";
export * from "./form";
export * from "./get-image-resolution";
export * from "./hooks";
export * from "./is-client";
export * from "./min-max-scaler";
export * from "./noop";
export * from "./pluralize";
export * from "./reordering";
export * from "./rhythm";
export * from "./safe-local-storage";
export * from "./safe-window";
export * from "./server-error";
export * from "./sorts";
export * from "./thousands-separator";
export * from "./time";
export * from "./toasts";
export * from "./translations";

export type Context = { request: Request };
export type ContextWithParams<T extends string> = Context & {
  params: Params<T>;
};

// TESTED
import { LineClamp } from "./line-clamp";
import { FilterUrl } from "./filter-url";

export const tested = {
  LineClamp,
  FilterUrl,
};
