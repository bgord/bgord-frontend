import { renderHook } from "@testing-library/react";
import * as rrd from "react-router-dom";
import { beforeEach, describe, expect, test, vi } from "vitest";
import {
  prepareBody,
  respond,
  useResponseHandler,
  withAutoContentType,
  withRevision,
  withTimeZoneOffset,
} from "../hooks/use-response-handler";

vi.mock("react-router-dom", () => ({
  useActionData: vi.fn(),
}));

describe("Response Handlers", () => {
  describe("useResponseHandler", () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    test("calls success callback on success response", () => {
      const mockSuccess = vi.fn();
      const mockResponse = {
        result: "success",
        intent: "test",
        id: "123",
        timestamp: Date.now(),
      };
      vi.mocked(rrd.useActionData).mockReturnValue(mockResponse);

      renderHook(() => useResponseHandler("test", "123", { success: mockSuccess }));

      expect(mockSuccess).toHaveBeenCalledTimes(1);
    });

    test("calls error callback on error response", () => {
      const mockError = vi.fn();
      const mockResponse = {
        result: "error",
        intent: "test",
        id: "123",
        timestamp: Date.now(),
      };
      vi.mocked(rrd.useActionData).mockReturnValue(mockResponse);

      renderHook(() => useResponseHandler("test", "123", { error: mockError }));

      expect(mockError).toHaveBeenCalledTimes(1);
    });

    test("ignores response with different intent", () => {
      const mockSuccess = vi.fn();
      const mockResponse = {
        result: "success",
        intent: "other",
        id: "123",
        timestamp: Date.now(),
      };
      vi.mocked(rrd.useActionData).mockReturnValue(mockResponse);

      renderHook(() => useResponseHandler("test", "123", { success: mockSuccess }));

      expect(mockSuccess).not.toHaveBeenCalled();
    });

    test("prevents duplicate handling within timeout", () => {
      const mockSuccess = vi.fn();
      const mockResponse = {
        result: "success",
        intent: "test",
        id: "123",
        timestamp: Date.now(),
      };
      vi.mocked(rrd.useActionData).mockReturnValue(mockResponse);

      const { rerender } = renderHook(() => useResponseHandler("test", "123", { success: mockSuccess }));
      rerender();

      expect(mockSuccess).toHaveBeenCalledTimes(1);
    });
  });

  describe("Header Modifiers", () => {
    test("withRevision adds revision header", () => {
      const headers = new Headers();
      const form = new FormData();
      form.append("revision", "123");

      const result = withRevision(form, headers);
      expect(result.get("if-match")).toBe("123");
    });

    test("withAutoContentType removes content-type header", () => {
      const headers = new Headers();
      headers.append("content-type", "application/json");

      const result = withAutoContentType(headers);
      expect(result.get("content-type")).toBeNull();
    });

    test("withTimeZoneOffset adds timezone offset", () => {
      const headers = new Headers();
      const offset = new Date().getTimezoneOffset();

      const result = withTimeZoneOffset(headers);
      expect(result.get("time-zone-offset")).toBe(offset.toString());
    });
  });

  test("prepareBody converts FormData to JSON", () => {
    const form = new FormData();
    form.append("key1", "value1");
    form.append("key2", "value2");

    const result = prepareBody(form);
    expect(JSON.parse(result)).toEqual({
      key1: "value1",
      key2: "value2",
    });
  });

  describe("respond", () => {
    test("returns success response for ok status", () => {
      const response = new Response(null, { status: 200 });
      const result = respond(response, "test", "123");

      expect(result).toEqual({
        result: "success",
        intent: "test",
        id: "123",
        timestamp: expect.any(Number),
      });
    });

    test("returns error response for non-ok status", () => {
      const response = new Response(null, { status: 400 });
      const result = respond(response, "test", "123");

      expect(result).toEqual({
        result: "error",
        intent: "test",
        id: "123",
        timestamp: expect.any(Number),
      });
    });
  });
});
