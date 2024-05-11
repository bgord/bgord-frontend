export type ServerErrorConfigType = {
  message: string;
};

export class ServerError {
  message: ServerErrorConfigType["message"];

  _known = true;

  constructor(config: ServerErrorConfigType) {
    this.message = config.message;
  }

  static isServerError(value: unknown): value is ServerError {
    if (
      value &&
      typeof value === "object" &&
      value === Object(value) &&
      // biome-ignore lint: lint/suspicious/noPrototypeBuiltins
      value.hasOwnProperty("_known") &&
      // biome-ignore lint: lint/suspicious/noPrototypeBuiltins
      value.hasOwnProperty("message")
    ) {
      return true;
    }
    return false;
  }

  static async extract(response: Response) {
    if (response.ok) return response;

    const error = await response.json();

    const message = ServerError.isServerError(error)
      ? error.message
      : "app.error.general";

    throw new ServerError({ message });
  }

  static async handle(payload: unknown): Promise<Response> {
    throw new ServerError({
      message: ServerError.isServerError(payload)
        ? payload.message
        : "app.error.general",
    });
  }
}
