import { useLayoutEffect } from "react";

export function useDisablePullToRefresh(condition = true): void {
  useLayoutEffect(() => {
    if (!condition) return;

    const html = document.querySelector("html") as HTMLElement;
    const body = document.body;

    // Get original overscroll behaviors
    const originalHtmlOverscrollBehavior = window.getComputedStyle(html).overscrollBehavior;
    const originalBodyOverflowBehavior = window.getComputedStyle(body).overscrollBehavior;

    // Disable pull to refresh
    body.style.overscrollBehavior = "none";
    html.style.overscrollBehavior = "none";

    // Enable pull to refresh when component unmounts
    return () => {
      body.style.overscrollBehavior = originalBodyOverflowBehavior;
      html.style.overscrollBehavior = originalHtmlOverscrollBehavior;
    };
  }, [condition]);
}
