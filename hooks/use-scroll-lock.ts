import { useLayoutEffect } from "react";

export function useScrollLock(condition = true): void {
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
