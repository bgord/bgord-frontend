import { useEffect, useState, Dispatch, SetStateAction } from "react";

export type UseFieldDefaultValueType<T> = T | (() => T);
export type UseFieldNameType = string;

export type UseFieldReturnType<T> = {
  value: T;
  set: Dispatch<SetStateAction<T>>;
  clear: VoidFunction;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: { props: { htmlFor: UseFieldNameType } };
  input: { props: { id: UseFieldNameType; name: UseFieldNameType } };
  changed: boolean;
  unchanged: boolean;
};

export function useField<T>(
  name: UseFieldNameType,
  defaultValue: UseFieldDefaultValueType<T>
): UseFieldReturnType<T> {
  const evaluatedDefaultValue =
    // @ts-ignore
    typeof defaultValue === "function" ? defaultValue() : defaultValue;

  const [value, setValue] = useState(evaluatedDefaultValue);

  useEffect(() => setValue(evaluatedDefaultValue), [evaluatedDefaultValue]);

  return {
    value,
    set: setValue,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      setValue(event.currentTarget.value),
    clear: () => setValue(evaluatedDefaultValue),
    label: { props: { htmlFor: name } },
    input: { props: { id: name, name: name } },
    changed: value !== evaluatedDefaultValue,
    unchanged: value == evaluatedDefaultValue,
  };
}

export function extractUseField<T, X>(
  props: UseFieldReturnType<T> & X
): { field: UseFieldReturnType<T>; rest: X } {
  // prettier-ignore
  const { value, set, clear, label, input, changed, unchanged, handleChange, ...rest } = props;

  // prettier-ignore
  return {
    field: { value, set, clear, label, input, changed, unchanged, handleChange },
    rest: rest as X,
  };
}

export class Fields {
  static allUnchanged(fields: { unchanged: boolean }[]): boolean {
    return fields.every((field) => field.unchanged);
  }

  static anyChanged(fields: { changed: boolean }[]): boolean {
    return fields.some((field) => field.changed);
  }
}
