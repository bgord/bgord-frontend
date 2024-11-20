import { useCallback, useEffect, useMemo, useRef } from "react";
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

/**
 * Hook to handle action responses with success/error callbacks
 */
export function useResponseHandler(
  intent: string,
  key: string | string[],
  config?: { success?: () => void; error?: () => void },
) {
  const response = rrd.useActionData() as ResponseType;
  const lastHandledKey = useRef<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Memoize callbacks with their dependencies
  const onSuccess = useCallback(() => {
    config?.success?.();
  }, [config?.success]);

  const onError = useCallback(() => {
    config?.error?.();
  }, [config?.error]);

  // Memoize key comparison for arrays
  const isKeyMatch = useCallback(
    (responseId: string) => {
      if (Array.isArray(key)) {
        return key.includes(responseId);
      }
      return responseId === key;
    },
    [key],
  );

  // Memoize response validation
  const isValidResponse = useMemo(() => {
    if (!response) return false;

    return response.intent === intent && response.id !== lastHandledKey.current && isKeyMatch(response.id);
  }, [response, intent, isKeyMatch]);

  useEffect(() => {
    if (!isValidResponse) return;

    if (response!.result === "success") {
      onSuccess();
      lastHandledKey.current = response!.id;
    } else if (response!.result === "error") {
      onError();
      lastHandledKey.current = response!.id;
    }

    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      lastHandledKey.current = null;
    }, 500);

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [response, isValidResponse, onSuccess, onError]);
}

export function respond(response: Response, intent: string, key: string) {
  const timestamp = Date.now();

  if (response.ok) return { result: "success", intent, id: key, timestamp };
  return { result: "error", intent, id: key, timestamp };
}
