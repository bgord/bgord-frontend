import { useState, Dispatch, SetStateAction } from "react";

export type UseFieldDefaultValueType<T> = T | (() => T);
export type UseFieldReturnType<T> = {
  value: T;
  set: Dispatch<SetStateAction<T>>;
  clear: VoidFunction;
};

export function useField<T>(
  defaultValue: UseFieldDefaultValueType<T>
): UseFieldReturnType<T> {
  const evaluatedDefaultValue =
    // @ts-ignore
    typeof defaultValue === "function" ? defaultValue() : defaultValue;

  const [value, setValue] = useState(evaluatedDefaultValue);

  function clear() {
    setValue(evaluatedDefaultValue);
  }

  return { value, set: setValue, clear };
}
