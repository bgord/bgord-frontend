import { useEffect, useMemo } from "react";

/**
 * Options for the useScrollLock hook
 */
interface ScrollLockOptions {
  /** Whether scrolling should be locked */
  condition?: boolean;
}

/**
 * React hook that prevents scrolling on the html element when active.
 * Used typically for modals, drawers, and other overlays.
 *
 * @param options - Configuration options for the scroll lock
 * @example
 * ```tsx
 * // Basic usage
 * useScrollLock();
 *
 * // With condition
 * useScrollLock({ condition: isModalOpen });
 * ```
 */
export function useScrollLock(options?: ScrollLockOptions): void {
  const { condition = true } = options || {};

  // SSR guard - don't run on server
  if (typeof document === "undefined") return;

  // Memoize element selection
  const html = useMemo(() => document.querySelector("html"), []);

  useEffect(() => {
    // Skip if condition is false or element not found
    if (!(condition && html)) {
      if (!html) console.warn("useScrollLock: HTML element not found");
      return;
    }

    // Get original overflow with fallbacks
    const originalHtmlOverflow = html.style.overflow || window.getComputedStyle(html)?.overflow || "visible";

    // Set overflow to hidden
    html.style.overflow = "hidden";

    // Cleanup function with explicit void return type
    return (): void => {
      html.style.overflow = originalHtmlOverflow;
    };
  }, [condition, html]); // Include html in dependencies since it's memoized
}
