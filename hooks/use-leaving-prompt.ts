import React from "react";

export type UseLeavingPromptConditionType = boolean;

export function useLeavingPrompt(
  condition: UseLeavingPromptConditionType = false
) {
  React.useEffect(() => {
    if (!condition) return;

    function handler(e: BeforeUnloadEvent) {
      e.preventDefault();
    }

    window.addEventListener("beforeunload", handler);

    return () => window.removeEventListener("beforeunload", handler);
  }, [condition]);
}
