import { useState, Dispatch, SetStateAction } from "react";

export type UseFieldDefaultValueType<T> = T | (() => T);
export type UseFieldNameType = string;

export type UseFieldReturnType<T> = {
  value: T;
  set: Dispatch<SetStateAction<T>>;
  clear: VoidFunction;
  label: { props: { htmlFor: UseFieldNameType } };
  input: { props: { id: UseFieldNameType; name: UseFieldNameType } };
};

export function useField<T>(
  name: UseFieldNameType,
  defaultValue: UseFieldDefaultValueType<T>
): UseFieldReturnType<T> {
  const evaluatedDefaultValue =
    // @ts-ignore
    typeof defaultValue === "function" ? defaultValue() : defaultValue;

  const [value, setValue] = useState(evaluatedDefaultValue);

  function clear() {
    setValue(evaluatedDefaultValue);
  }

  return {
    value,
    set: setValue,
    clear,
    label: { props: { htmlFor: name } },
    input: { props: { id: name, name: name } },
  };
}
