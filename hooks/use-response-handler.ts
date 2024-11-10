import { useEffect, useRef } from "react";
import * as rrd from "react-router-dom";

export type ResponseType =
  | {
      result: "success" | "error";
      intent: string;
      id: string;
      timestamp: number;
    }
  | undefined;

export function withRevision(form: FormData, headers: Headers): Headers {
  headers.append("if-match", form.get("revision") as string);
  return headers;
}

export function withAutoContentType(headers: Headers): Headers {
  headers.delete("content-type");
  return headers;
}

export function prepareBody(form: FormData): string {
  // @ts-ignore
  return JSON.stringify(Object.fromEntries(form));
}

export function withTimeZoneOffset(headers: Headers): Headers {
  headers.append("time-zone-offset", new Date().getTimezoneOffset().toString());
  return headers;
}

export function useResponseHandler(
  intent: string,
  key: string | string[],
  config?: { success?: () => void; error?: () => void },
) {
  const response = rrd.useActionData() as ResponseType;
  const lastHandledKey = useRef<string | null>(null);

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useEffect(() => {
    if (
      response?.intent !== intent ||
      response.id === lastHandledKey.current ||
      response.id !== key
    ) {
      return;
    }
    if (response.result === "success") {
      config?.success?.();
      lastHandledKey.current = response.id;

      setTimeout(() => {
        lastHandledKey.current = null;
      }, 500);
    }
    if (response.result === "error") {
      config?.error?.();
      lastHandledKey.current = response.id;

      setTimeout(() => {
        lastHandledKey.current = null;
      }, 500);
    }
  }, [
    response?.result,
    response?.intent,
    response?.timestamp,
    response?.id,
    intent,
    key,
    config?.success,
    config?.error,
  ]);
}

export function respond(response: Response, intent: string, key: string) {
  const timestamp = Date.now();

  if (response.ok) return { result: "success", intent, id: key, timestamp };
  return { result: "error", intent, id: key, timestamp };
}
