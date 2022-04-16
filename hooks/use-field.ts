import { useState } from "react";

export function useField<T>(defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue);

  function clear() {
    setValue(defaultValue);
  }

  return { value, set: setValue, clear };
}
