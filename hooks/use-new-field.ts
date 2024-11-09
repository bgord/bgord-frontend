import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Field, FieldValueType, FieldInputValueType } from "./field";

type NewFieldNameType = string;

export type FieldElementType =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export enum UseNewFieldStrategyEnum {
  params = "params",
  local = "local",
}

type UseNewFieldConfigType = {
  name: NewFieldNameType;
  defaultValue?: FieldInputValueType;
  strategy?: UseNewFieldStrategyEnum;
};

type UseNewFieldReturnType = {
  defaultValue: FieldValueType;
  currentValue: FieldValueType;
  value: string;
  set: (value: FieldValueType) => void;
  handleChange: (event: React.ChangeEvent<FieldElementType>) => void;
  clear: () => void;
  label: { props: { htmlFor: NewFieldNameType } };
  input: { props: { id: NewFieldNameType; name: NewFieldNameType } };
  changed: boolean;
  unchanged: boolean;
  empty: boolean;
};

export function useNewField(
  config: UseNewFieldConfigType,
): UseNewFieldReturnType {
  const strategy = config.strategy ?? UseNewFieldStrategyEnum.local;

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

    if (strategy === UseNewFieldStrategyEnum.params) {
      if (current.isEmpty()) {
        params.delete(config.name);
        setParams(params);
      } else {
        params.set(config.name, current.get() as string);
        setParams(params);
      }
    }

    if (strategy === UseNewFieldStrategyEnum.local) {
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
