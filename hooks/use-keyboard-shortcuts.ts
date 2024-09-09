import React from "react";
import { tinykeys } from "tinykeys";

export interface UseKeyboardShortcutsConfigType {
  [keybinding: string]: (event: KeyboardEvent) => void;
}

export type UseKeyboardShortcutsOptionsType = { enabled?: boolean };

export function useKeyboardShortcuts(
  config: UseKeyboardShortcutsConfigType,
  options?: UseKeyboardShortcutsOptionsType,
): void {
  const enabled = options?.enabled ?? true;

  React.useEffect(() => {
    if (!enabled) return;

    const unsubscribeShortcuts = tinykeys(window, config);

    return () => unsubscribeShortcuts();
  }, [config, enabled]);
}
