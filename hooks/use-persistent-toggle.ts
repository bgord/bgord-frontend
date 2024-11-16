import { useEffect } from "react";

import { SafeLocalStorage, SafeLocalStorageKeyType } from "../safe-local-storage";
import { UseToggleReturnType, UseToggleValueType, useToggle } from "./use-toggle";

export type UsePersistentToggleReturnType = UseToggleReturnType & {
  clear: VoidFunction;
};

export function usePersistentToggle(
  key: SafeLocalStorageKeyType,
  defaultValue: UseToggleValueType = false,
): UsePersistentToggleReturnType {
  const storedValue = SafeLocalStorage.get<UseToggleValueType>(key, defaultValue);

  const toggle = useToggle({ defaultValue: storedValue, name: key });

  useEffect(() => SafeLocalStorage.set(key, toggle.on), [key, toggle.on]);

  return { ...toggle, clear: () => SafeLocalStorage.clear(key) };
}
