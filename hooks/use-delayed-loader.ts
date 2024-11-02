import { useEffect } from "react";
import { Navigation } from "react-router-dom";

import { useToggle, UseToggleReturnType } from "./use-toggle";

export function useDelayedLoader(
  navigation: Navigation,
  delayMs = 500,
): UseToggleReturnType {
  const delayedLoader = useToggle();
  const delayElapsed = useToggle();

  let timeoutId: NodeJS.Timeout;

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useEffect(() => {
    // @ts-ignore
    timeoutId = setTimeout(delayElapsed.enable, delayMs);

    return () => clearTimeout(timeoutId);
  }, []);

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useEffect(() => {
    if (delayElapsed.off) return;
    if (navigation.state === "loading") return delayedLoader.enable();
    return delayedLoader.disable();
  }, [navigation.state, delayElapsed.on]);

  return delayedLoader;
}
