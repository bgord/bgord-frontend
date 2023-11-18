import { ServerError } from "./server-error";

export const API: typeof fetch = (input, init) =>
  fetch(input, {
    mode: "same-origin",
    redirect: "follow",
    ...init,
    headers: {
      "Content-Type": "application/json",

      "time-zone-offset": new Date().getTimezoneOffset().toString(),
      ...init?.headers,
    },
  })
    .then(ServerError.extract)
    .catch(ServerError.handle);
