import { useEffect, useRef } from "react";
import * as rrd from "react-router-dom";

export type ResponseType =
  | {
      result: "success" | "error";
      intent: string;
      id: string;
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
  key: string,
  config?: { success?: () => void; error?: () => void }
) {
  const response = rrd.useActionData() as ResponseType;
  const lastHandledId = useRef<string | null>(null);

  useEffect(() => {
    if (
      response?.intent !== intent ||
      response.id === lastHandledId.current ||
      response.id !== key
    ) {
      return;
    }
    if (response.result === "success") {
      config?.success?.();
      lastHandledId.current = response.id;
    }
    if (response.result === "error") {
      config?.error?.();
      lastHandledId.current = response.id;
    }
  }, [response?.result, intent, key]);
}

export function respond(response: Response, intent: string, key: string) {
  if (response.ok) return { result: "success", intent, id: key };
  return { result: "error", intent, id: key };
}
