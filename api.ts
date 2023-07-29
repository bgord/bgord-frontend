import { ServerError } from "./server-error";
import { SafeLocalStorage } from "./safe-local-storage";

export const API: typeof fetch = (input, init) =>
  fetch(input, {
    mode: "same-origin",
    headers: {
      "Content-Type": "application/json",

      "time-zone-offset": new Date().getTimezoneOffset().toString(),
      "accept-language": SafeLocalStorage.get("accept-language", "en"),
    },
    redirect: "follow",
    ...init,
  })
    .then(ServerError.extract)
    .catch(ServerError.handle);
