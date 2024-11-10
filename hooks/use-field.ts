import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { QueryValue, QueryValueType } from "./use-client-filter";

export type HTMLElementType =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export type UseFieldDefaultValueType<T> = T | (() => T);
export type UseFieldNameType = string;

export type FieldState<T> = {
  value: T;
  set: (value: T) => void;
  handleChange: (event: React.ChangeEvent<HTMLElementType>) => void;
  clear: () => void;
  label: { props: { htmlFor: string } };
  input: { props: { id: string; name: string } };
  changed: boolean;
  unchanged: boolean;
};

export function useField<T>(
  name: UseFieldNameType,
  defaultValue: UseFieldDefaultValueType<T>,
): FieldState<T> {
  const evaluatedDefaultValue =
    typeof defaultValue === "function"
      ? (defaultValue as () => T)()
      : defaultValue;

  const [value, setValue] = useState(evaluatedDefaultValue);

  useEffect(() => setValue(evaluatedDefaultValue), [evaluatedDefaultValue]);

  return {
    value,
    set: setValue,
    handleChange: (event: React.ChangeEvent<HTMLElementType>) =>
      setValue(event.currentTarget.value as unknown as T),
    clear: () => setValue(evaluatedDefaultValue),
    label: { props: { htmlFor: name } },
    input: { props: { id: name, name: name } },
    changed: value !== evaluatedDefaultValue,
    unchanged: value === evaluatedDefaultValue,
  };
}

export function useUrlField<T>(
  name: UseFieldNameType,
  defaultValue: UseFieldDefaultValueType<T>,
): FieldState<T> {
  const [params, setParams] = useSearchParams();
  const field = useField(name, defaultValue);

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useEffect(() => {
    const query = new QueryValue(field.value as QueryValueType);

    if (query.isEmpty()) {
      params.delete(name);
      setParams(params);
    } else {
      params.set(name, String(query.get()));
      setParams(params);
    }
  }, [field.value]);

  return field;
}

export function extractUseField<T, X>(
  props: FieldState<T> & X,
): { field: FieldState<T>; rest: X } {
  // prettier-ignore
  const { value, set, clear, label, input, changed, unchanged, handleChange, ...rest } = props;

  // prettier-ignore
  return {
    field: { value, set, clear, label, input, changed, unchanged, handleChange },
    rest: rest as X,
  };
}
