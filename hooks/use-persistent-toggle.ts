import * as React from "react";

import {
  useToggle,
  UseToggleReturnType,
  UseToggleValueType,
} from "./use-toggle";
import {
  SafeLocalStorage,
  SafeLocalStorageKeyType,
} from "../safe-local-storage";

export function usePersistentToggle(
  key: SafeLocalStorageKeyType,
  defaultValue: UseToggleValueType = false
): UseToggleReturnType & { clear: VoidFunction } {
  const storedValue = SafeLocalStorage.get<UseToggleValueType>(
    key,
    defaultValue
  );

  const toggle = useToggle(storedValue);

  React.useEffect(() => SafeLocalStorage.set(key, toggle.on), [key, toggle.on]);

  return { ...toggle, clear: () => SafeLocalStorage.clear(key) };
}
