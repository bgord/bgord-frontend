import { useEffect } from "react";

export type UseLeavingPromptConditionType = boolean;

export function useLeavingPrompt(
  condition: UseLeavingPromptConditionType = false
): void {
  useEffect(() => {
    if (!condition) return;

    function handler(e: BeforeUnloadEvent) {
      e.preventDefault();
    }

    window.addEventListener("beforeunload", handler);

    return () => window.removeEventListener("beforeunload", handler);
  }, [condition]);
}
