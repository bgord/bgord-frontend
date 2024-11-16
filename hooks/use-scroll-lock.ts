import { useEffect } from "react";

export function useScrollLock(condition = true): void {
  useEffect(() => {
    if (!condition) return;

    const html = document.querySelector("html") as HTMLElement;

    if (!html) return;
    const originalHtmlOverflow = window.getComputedStyle(html).overflow;

    // Prevent scrolling on mount
    html.style.overflow = "hidden";

    // Re-enable scrolling when component unmounts
    return () => {
      html.style.overflow = originalHtmlOverflow;
    };
  }, [condition]);
}
