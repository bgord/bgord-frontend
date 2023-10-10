import React from "react";
import tinykeys from "tinykeys";

export interface UseKeyboardShortcutsConfigType {
  [keybinding: string]: (event: KeyboardEvent) => void;
}

export function useKeyboardShortcuts(
  config: UseKeyboardShortcutsConfigType
): void {
  React.useEffect(() => {
    const unsubscribeShortcuts = tinykeys(window, config);

    return () => unsubscribeShortcuts();
  }, [config]);
}
