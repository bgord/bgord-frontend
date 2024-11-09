import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Field, FieldValueType } from "./field";

type ParamsFieldNameType = string;

export type FieldElementType =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

type UseParamsFieldConfigType = {
  name: ParamsFieldNameType;
  defaultValue?: FieldValueType;
};

type UseParamsReturnType = {
  defaultValue: FieldValueType;
  currentValue: FieldValueType;
  value: string;
  set: (value: FieldValueType) => void;
  handleChange: (event: React.ChangeEvent<FieldElementType>) => void;
  clear: () => void;
  label: { props: { htmlFor: ParamsFieldNameType } };
  input: { props: { id: ParamsFieldNameType; name: ParamsFieldNameType } };
  changed: boolean;
  unchanged: boolean;
  empty: boolean;
};

// TODO validator function

export function useParamsField(
  config: UseParamsFieldConfigType,
): UseParamsReturnType {
  const [params, setParams] = useSearchParams();

  const givenValue = new Field(params.get(config.name));
  const defaultValue = new Field(config.defaultValue);

  const [currentValue, _setCurrentValue] = useState(
    givenValue.isEmpty() ? defaultValue.get() : givenValue.get(),
  );

  const setCurrentValue = (value: FieldValueType) => {
    const candidate = new Field(value);
    _setCurrentValue(candidate.get());
  };

  useEffect(() => {
    const current = new Field(currentValue);

    if (current.isEmpty()) {
      params.delete(config.name);
      setParams(params);
    } else {
      params.set(config.name, current.get() as string);
      setParams(params);
    }
  }, [currentValue, params, setParams, config.name]);

  return {
    defaultValue: defaultValue.get(),
    currentValue,
    // To account for React's controlled component's empty value.
    value: Field.isEmpty(currentValue) ? "" : (currentValue as string),
    set: setCurrentValue,
    handleChange: (event: React.ChangeEvent<FieldElementType>) =>
      setCurrentValue(event.currentTarget.value),
    clear: () => setCurrentValue(defaultValue.get()),
    label: { props: { htmlFor: config.name } },
    input: { props: { id: config.name, name: config.name } },
    changed: !Field.compare(currentValue, defaultValue.get()),
    unchanged: Field.compare(currentValue, defaultValue.get()),
    empty: Field.isEmpty(currentValue),
  };
}
