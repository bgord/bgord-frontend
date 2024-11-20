/**
 * Safely access window object in any environment
 * @returns window object or undefined if not available
 */
export function getSafeWindow() {
  if (typeof window === "undefined") return undefined;
  return window;
}
