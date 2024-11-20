import { useCallback, useLayoutEffect, useMemo } from "react";

/**
 * Hook to disable pull-to-refresh functionality on mobile devices
 *
 * @description
 * This hook disables the pull-to-refresh gesture by setting overscroll-behavior
 * on html and body elements. It automatically restores original behavior on cleanup.
 * The effect can be conditionally enabled/disabled.
 *
 * @example
 * ```tsx
 * function ScrollableContent() {
 *   // Always disable pull-to-refresh
 *   useDisablePullToRefresh();
 *
 *   return <div>Scrollable content</div>;
 * }
 * ```
 *
 * @example
 * ```tsx
 * function ConditionalScrollable() {
 *   const [shouldDisable, setShouldDisable] = useState(true);
 *
 *   // Conditionally disable pull-to-refresh
 *   useDisablePullToRefresh(shouldDisable);
 *
 *   return (
 *     <>
 *       <button onClick={() => setShouldDisable(!shouldDisable)}>
 *         {shouldDisable ? 'Enable' : 'Disable'} Pull to Refresh
 *       </button>
 *       <div>Scrollable content</div>
 *     </>
 *   );
 * }
 * ```
 *
 * @param condition - Optional boolean to conditionally enable/disable the effect (default: true)
 */
export function useDisablePullToRefresh(condition = true): void {
  // Memoize element selections
  const elements = useMemo(() => {
    if (typeof document === "undefined") return null;

    return {
      html: document.querySelector("html") as HTMLElement,
      body: document.body,
    };
  }, []);

  // Memoize style operations
  const getOriginalStyles = useCallback(() => {
    if (!elements) return null;

    return {
      htmlOverscroll: window.getComputedStyle(elements.html).overscrollBehavior,
      bodyOverscroll: window.getComputedStyle(elements.body).overscrollBehavior,
    };
  }, [elements]);

  // Memoize style update function
  const updateStyles = useCallback((element: HTMLElement, style: string) => {
    element.style.overscrollBehavior = style;
  }, []);

  useLayoutEffect(() => {
    // Skip if condition is false or no elements (SSR)
    if (!(condition && elements)) return;

    // Get original styles
    const originalStyles = getOriginalStyles();
    if (!originalStyles) return;

    // Disable pull to refresh
    updateStyles(elements.body, "none");
    updateStyles(elements.html, "none");

    // Cleanup: restore original styles
    return () => {
      updateStyles(elements.body, originalStyles.bodyOverscroll);
      updateStyles(elements.html, originalStyles.htmlOverscroll);
    };
  }, [condition, elements, getOriginalStyles, updateStyles]);
}
