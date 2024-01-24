import { useEffect } from "react";
import { UseQueryResult } from "react-query";

import { useToggle, UseToggleReturnType } from "./use-toggle";

export type UseDelayedLoaderConfig = Pick<UseQueryResult, "isLoading">;

export function useDelayedLoader(
  config: UseDelayedLoaderConfig,
  delayMs = 500
): UseToggleReturnType {
  const delayedLoader = useToggle();
  const delayElapsed = useToggle();

  let timeoutId: NodeJS.Timeout;

  useEffect(() => {
    timeoutId = setTimeout(delayElapsed.enable, delayMs);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (delayElapsed.off) return;
    if (config.isLoading) return delayedLoader.enable();
    return delayedLoader.disable();
  }, [config.isLoading, delayElapsed.on]);

  return delayedLoader;
}
