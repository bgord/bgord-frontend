import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Field, FieldValueAllowedTypes, FieldInputValueType } from "./field";

type NewFieldNameType = string;

export type FieldElementType =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export enum UseNewFieldStrategyEnum {
  params = "params",
  local = "local",
}

type UseNewFieldConfigType<T extends FieldValueAllowedTypes> = {
  name: NewFieldNameType;
  defaultValue?: FieldInputValueType<T>;
  strategy?: UseNewFieldStrategyEnum;
};

type UseNewFieldReturnType<T extends FieldValueAllowedTypes> = {
  defaultValue: T;
  currentValue: T;
  value: string;
  set: (value: T) => void;
  handleChange: (event: React.ChangeEvent<FieldElementType>) => void;
  clear: () => void;
  label: { props: { htmlFor: NewFieldNameType } };
  input: { props: { id: NewFieldNameType; name: NewFieldNameType } };
  changed: boolean;
  unchanged: boolean;
  empty: boolean;
};

export function useNewField<T extends FieldValueAllowedTypes>(
  config: UseNewFieldConfigType<T>,
): UseNewFieldReturnType<T> {
  const strategy = config.strategy ?? UseNewFieldStrategyEnum.local;

  const [params, setParams] = useSearchParams();

  const givenValue = new Field<T>(params.get(config.name) as T);
  const defaultValue = new Field<T>(config.defaultValue as T);

  const [currentValue, _setCurrentValue] = useState(
    givenValue.isEmpty() ? defaultValue.get() : givenValue.get(),
  );

  const setCurrentValue = (value: T) => {
    const candidate = new Field<T>(value);
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
      setCurrentValue(event.currentTarget.value as T),
    clear: () => setCurrentValue(defaultValue.get()),
    label: { props: { htmlFor: config.name } },
    input: { props: { id: config.name, name: config.name } },
    changed: !Field.compare(currentValue, defaultValue.get()),
    unchanged: Field.compare(currentValue, defaultValue.get()),
    empty: Field.isEmpty(currentValue),
  };
}
