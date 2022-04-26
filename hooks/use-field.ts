import { useState, useEffect, Dispatch, SetStateAction } from "react";

export type UseFieldDefaultValueType<T> = T | (() => T);
export type UseFieldReturnType<T> = {
  value: T;
  set: Dispatch<SetStateAction<T>>;
  clear: VoidFunction;
};

export function useField<T>(
  defaultValue: UseFieldDefaultValueType<T>
): UseFieldReturnType<T> {
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
