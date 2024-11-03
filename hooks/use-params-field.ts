import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { ParamsField, ParamsFieldValueType } from "./params-field";

type ParamsFieldNameType = string;

export type FieldElementType =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

type UseParamsFieldConfigType = {
  name: ParamsFieldNameType;
  defaultValue?: ParamsFieldValueType;
};

export function useParamsField(config: UseParamsFieldConfigType) {
  const [params, setParams] = useSearchParams();

  const givenValue = new ParamsField(params.get(config.name));
  const defaultValue = new ParamsField(config.defaultValue);

  const [currentValue, _setCurrentValue] = useState(
    givenValue.isEmpty() ? defaultValue.get() : givenValue.get()
  );

  const setCurrentValue = (value: ParamsFieldValueType) => {
    const candidate = new ParamsField(value);
    _setCurrentValue(candidate.get());
  };

  useEffect(() => {
    const current = new ParamsField(currentValue);

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
    value: ParamsField.isEmpty(currentValue) ? "" : currentValue,
    set: setCurrentValue,
    handleChange: (event: React.ChangeEvent<FieldElementType>) =>
      setCurrentValue(event.currentTarget.value),
    clear: () => setCurrentValue(defaultValue.get()),
    label: { props: { htmlFor: config.name } },
    input: { props: { id: config.name, name: config.name } },
    changed: !ParamsField.compare(currentValue, defaultValue.get()),
    unchanged: ParamsField.compare(currentValue, defaultValue.get()),
    empty: ParamsField.isEmpty(currentValue),
  };
}
