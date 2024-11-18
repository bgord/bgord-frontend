import { describe, test, expect } from "vitest";
import { ServerError } from "../server-error";

describe("ServerError", () => {
  test("constructor sets message", () => {
    const error = new ServerError({ message: "test error" });
    expect(error.message).toBe("test error");
    expect(error._known).toBe(true);
  });

  describe("isServerError", () => {
    test("identifies valid ServerError", () => {
      const error = new ServerError({ message: "test" });
      expect(ServerError.isServerError(error)).toBe(true);
    });

    test("rejects non-ServerError objects", () => {
      expect(ServerError.isServerError({ message: "test" })).toBe(false);
      expect(ServerError.isServerError(null)).toBe(false);
      expect(ServerError.isServerError(undefined)).toBe(false);
      expect(ServerError.isServerError("error")).toBe(false);
    });
  });

  describe("extract", () => {
    test("passes through ok response", async () => {
      const response = new Response(null, { status: 200 });
      const result = await ServerError.extract(response);
      expect(result).toBe(response);
    });

    test("throws ServerError for non-ok response with server error", async () => {
      const errorResponse = new Response(
        JSON.stringify(new ServerError({ message: "custom error" })),
        { status: 400 }
      );

      await expect(ServerError.extract(errorResponse)).rejects.toEqual(
        expect.objectContaining({
          message: "custom error",
          _known: true,
        })
      );
    });

    test("throws generic error for non-ok response without server error", async () => {
      const errorResponse = new Response(
        JSON.stringify({ someField: "value" }),
        { status: 400 }
      );

      await expect(ServerError.extract(errorResponse)).rejects.toEqual(
        expect.objectContaining({
          message: "app.error.general",
          _known: true,
        })
      );
    });
  });

  describe("handle", () => {
    test("throws ServerError with custom message for server error payload", async () => {
      const serverError = new ServerError({ message: "custom error" });

      await expect(ServerError.handle(serverError)).rejects.toEqual(
        expect.objectContaining({
          message: "custom error",
          _known: true,
        })
      );
    });

    test("throws ServerError with generic message for non-server error payload", async () => {
      await expect(ServerError.handle({ someField: "value" })).rejects.toEqual(
        expect.objectContaining({
          message: "app.error.general",
          _known: true,
        })
      );
    });
  });
});
