import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { getSafeWindow } from "../safe-window";
import { UseToggleReturnType, useToggle } from "./use-toggle";

type ScrollPositionType = number;

type UseScrollReturnType = {
  actions: { goToTop: VoidFunction };
  position: {
    value: ScrollPositionType;
    isInitial: boolean;
    hasChanged: boolean;
  };
  visible: UseToggleReturnType["on"];
  hidden: UseToggleReturnType["off"];
};

/**
 * Hook for managing scroll position and visibility
 *
 * @example
 * ```tsx
 * function ScrollToTop() {
 *   const scroll = useScroll();
 *
 *   if (!scroll.position.hasChanged) return null;
 *
 *   return (
 *     <button onClick={scroll.actions.goToTop}>
 *       Scroll to Top
 *     </button>
 *   );
 * }
 * ```
 */
export function useScroll(): UseScrollReturnType {
  const safeWindow = useMemo(() => getSafeWindow(), []);
  const defaultScrollPosition = 0;

  const [scrollPosition, setScrollPosition] = useState<ScrollPositionType>(
    defaultScrollPosition,
  );
  const scrollbarVisibility = useToggle({ name: "scroll-visibility" });

  const goToTop = useCallback(() => {
    if (!safeWindow) return;
    safeWindow.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [safeWindow]);

  const measure = useCallback(() => {
    if (!safeWindow) return;

    setScrollPosition(safeWindow.scrollY);

    const shouldShowScrollbar =
      safeWindow.document.body.clientHeight <
      safeWindow.document.body.scrollHeight;

    if (shouldShowScrollbar) {
      scrollbarVisibility.enable();
    } else {
      scrollbarVisibility.disable();
    }
  }, [safeWindow, scrollbarVisibility]);

  useLayoutEffect(() => {
    if (!safeWindow) return;

    safeWindow.addEventListener("scroll", measure);
    measure(); // Initial measurement

    return () => safeWindow.removeEventListener("scroll", measure);
  }, [safeWindow, measure]);

  return useMemo(
    () => ({
      actions: { goToTop },
      position: {
        value: scrollPosition,
        isInitial: scrollPosition === 0,
        hasChanged: scrollPosition > 0,
      },
      visible: scrollbarVisibility.on,
      hidden: scrollbarVisibility.off,
    }),
    [goToTop, scrollPosition, scrollbarVisibility.on, scrollbarVisibility.off],
  );
}
