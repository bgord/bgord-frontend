import { getSafeWindow } from "./safe-window";

export function isClient() {
  return !getSafeWindow();
}
