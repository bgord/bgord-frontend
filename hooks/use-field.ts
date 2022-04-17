import { useState, useEffect } from "react";

export function useField<T>(defaultValue: T | (() => T)) {
  const [value, setValue] = useState<T>(defaultValue);

  const evaluatedDefaultValue =
    // @ts-ignore
    typeof defaultValue === "function" ? defaultValue() : defaultValue;

  useEffect(() => {
    setValue(evaluatedDefaultValue);
  }, [evaluatedDefaultValue]);

  function clear() {
    setValue(defaultValue);
  }

  return { value, set: setValue, clear };
}
