/**
 * Client environment detector
 * @module Client
 */
import { getSafeWindow } from "./safe-window";

/**
 * Checks if code is running in client/browser environment
 * @returns false if window is available, true if not
 */
export function isClient() {
  return !getSafeWindow();
}
