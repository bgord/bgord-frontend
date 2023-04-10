import { getSafeWindow } from "../safe-window";

export function useScroll() {
  const safeWindow = getSafeWindow();

  function toTop() {
    if (!safeWindow) return;

    safeWindow.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return { toTop };
}
