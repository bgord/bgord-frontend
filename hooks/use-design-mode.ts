import { useEffect } from "react";

import { getSafeWindow } from "../safe-window";
import {
  useToggle,
  UseToggleConfigType,
  UseToggleReturnType,
} from "./use-toggle";

export function useDesignMode(
  config: UseToggleConfigType,
): UseToggleReturnType {
  const designMode = useToggle(config);
  const safeWindow = getSafeWindow();

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useEffect(() => {
    if (!safeWindow) return;

    safeWindow.document.designMode = designMode.on ? "on" : "off";
  }, [designMode.on]);

  return designMode;
}
