import { useState, useEffect, useLayoutEffect } from "react";

export function useToggle(defaultValue = false) {
  const [on, setIsOn] = useState(defaultValue);

  const enable = () => setIsOn(true);
  const disable = () => setIsOn(false);
  const toggle = () => setIsOn((v) => !v);

  return { on, off: !on, enable, disable, toggle };
}

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
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export function useScrollLock(condition = true) {
  useLayoutEffect(() => {
    if (!condition) return;

    const html = document.querySelector("html") as HTMLElement;
    const body = document.body;

    // Get original overflows
    const originalBodyOverflow = window.getComputedStyle(body).overflow;
    const originalHtmlOverflow = window.getComputedStyle(html).overflow;

    // Prevent scrolling on mount
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    // Re-enable scrolling when component unmounts
    return () => {
      body.style.overflow = originalBodyOverflow;
      html.style.overflow = originalHtmlOverflow;
    };
  }, [condition]);
}
