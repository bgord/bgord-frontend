import { useEffect, useCallback, useMemo } from "react";
import {
  SafeLocalStorage,
  SafeLocalStorageKeyType,
} from "../safe-local-storage";
import {
  UseToggleReturnType,
  UseToggleValueType,
  useToggle,
} from "./use-toggle";

export type UsePersistentToggleReturnType = UseToggleReturnType & {
  clear: VoidFunction;
};

/**
 * Hook for toggle state that persists in localStorage
 *
 * @example
 * ```tsx
 * function DarkModeToggle() {
 *   const darkMode = usePersistentToggle('dark-mode', false);
 *
 *   return (
 *     <button onClick={darkMode.toggle}>
 *       {darkMode.on ? 'Light Mode' : 'Dark Mode'}
 *     </button>
 *   );
 * }
 * ```
 */
export function usePersistentToggle(
  key: SafeLocalStorageKeyType,
  defaultValue: UseToggleValueType = false
): UsePersistentToggleReturnType {
  const storedValue = useMemo(
    () => SafeLocalStorage.get<UseToggleValueType>(key, defaultValue),
    [key, defaultValue]
  );

  const toggle = useToggle({ defaultValue: storedValue, name: key });

  useEffect(() => SafeLocalStorage.set(key, toggle.on), [key, toggle.on]);

  const clear = useCallback(() => SafeLocalStorage.clear(key), [key]);

  return useMemo(() => ({ ...toggle, clear }), [toggle, clear]);
}
