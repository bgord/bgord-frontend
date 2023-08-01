import React from "react";
import tinykeys from "tinykeys";

export interface UseKeyboardShortcurtsConfigType {
  [keybinding: string]: (event: KeyboardEvent) => void;
}

export function useKeyboardShortcurts(
  config: UseKeyboardShortcurtsConfigType
): void {
  React.useEffect(() => {
    const unsubscribeShortcuts = tinykeys(window, config);

    return () => unsubscribeShortcuts();
  }, [config]);
}
