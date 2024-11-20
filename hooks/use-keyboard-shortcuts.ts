import { useEffect, useMemo } from "react";
import { tinykeys } from "tinykeys";

export interface UseKeyboardShortcutsConfigType {
  [keybinding: string]: (event: KeyboardEvent) => void;
}

export type UseKeyboardShortcutsOptionsType = {
  enabled?: boolean;
};

/**
 * Hook for managing keyboard shortcuts
 *
 * @example
 * ```tsx
 * function SearchBox() {
 *   const inputRef = useRef<HTMLInputElement>(null);
 *
 *   useKeyboardShortcuts({
 *     "Control+k": (e) => {
 *       e.preventDefault();
 *       inputRef.current?.focus();
 *     }
 *   });
 *
 *   return <input ref={inputRef} type="search" />;
 * }
 * ```
 */
export function useKeyboardShortcuts(
  config: UseKeyboardShortcutsConfigType,
  options?: UseKeyboardShortcutsOptionsType,
): void {
  const enabled = options?.enabled ?? true;

  // Memoize config to prevent unnecessary effect triggers
  const memoizedConfig = useMemo(
    () => config,
    // Using JSON.stringify as a stable way to compare config objects
    [JSON.stringify(Object.keys(config))],
  );

  useEffect(() => {
    if (!enabled) return;

    const unsubscribe = tinykeys(window, memoizedConfig);
    return () => unsubscribe();
  }, [memoizedConfig, enabled]);
}
