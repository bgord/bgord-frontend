import { useState, useLayoutEffect } from "react";

import { getSafeWindow } from "../safe-window";
import { useToggle, UseToggleReturnType } from "./use-toggle";

export type ScrollPositionType = number;

export type UseScrollReturnType = {
  actions: { goToTop: VoidFunction };
  position: {
    value: ScrollPositionType;
    isInitial: boolean;
    hasChanged: boolean;
  };
  visible: UseToggleReturnType["on"];
  hidden: UseToggleReturnType["off"];
};

export function useScroll(): UseScrollReturnType {
  const safeWindow = getSafeWindow();

  // Scroll position always set at the top of the page
  const defaultScrollPosition = 0;
  const [scrollPosition, setScrollPosition] = useState<ScrollPositionType>(
    defaultScrollPosition
  );

  // Assuming scrollbar is hidden by default
  const scrollbarVisibility = useToggle(false);

  function goToTop() {
    if (!safeWindow) return;
    safeWindow.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useLayoutEffect(() => {
    function measure() {
      if (!safeWindow) return;

      setScrollPosition(safeWindow?.scrollY);

      // Checking if the viewport (clientHeight) can fully contain
      // full content height (scrollHeight)
      if (
        safeWindow.document.body.clientHeight <
        safeWindow.document.body.scrollHeight
      ) {
        scrollbarVisibility.enable();
      } else {
        scrollbarVisibility.disable();
      }
    }

    safeWindow?.addEventListener("scroll", measure);

    return () => safeWindow?.removeEventListener("scroll", measure);
  }, []);

  return {
    actions: { goToTop },
    position: {
      value: scrollPosition,
      isInitial: scrollPosition === 0,
      hasChanged: scrollPosition > 0,
    },
    visible: scrollbarVisibility.on,
    hidden: scrollbarVisibility.off,
  };
}
