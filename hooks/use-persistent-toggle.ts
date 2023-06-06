import * as React from "react";

import {
  useToggle,
  UseToggleReturnType,
  UseToggleValueType,
} from "./use-toggle";
import { SafeLocalStorage } from "../safe-local-storage";

export function usePersistentToggle(
  key: string,
  defaultValue: UseToggleValueType = false
): UseToggleReturnType {
  const storedValue = SafeLocalStorage.get<UseToggleValueType>(
    key,
    defaultValue
  );

  const toggle = useToggle(storedValue);

  React.useEffect(() => SafeLocalStorage.set(key, toggle.on), [key, toggle.on]);

  return toggle;
}
