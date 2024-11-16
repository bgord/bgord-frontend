import { useEffect, useState } from "react";
import { getSafeWindow } from "../safe-window";

export type WindowDimensions = {
  width: number | undefined;
  height: number | undefined;
};

export function useWindowDimensions(): WindowDimensions {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const safeWindow = getSafeWindow();

    if (!safeWindow) return;

    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: safeWindow?.innerWidth,
        height: safeWindow?.innerHeight,
      });
    }

    // Add event listener
    safeWindow.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => safeWindow.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
