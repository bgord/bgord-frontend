import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export type FieldElementType =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

type QueryFieldNameType = string;

type QueryFieldValueType = string | undefined;
type QueryFieldInputValueType = string | undefined | null;

export class QueryField {
  // Chose `undefined` here instead of `null`,
  // because HTML elements accept it as an empty value.
  static emptyValue = undefined;

  static isEmpty(value: QueryFieldInputValueType): boolean {
    return value === undefined || value === "" || value === null;
  }

  static compare(
    one: QueryFieldValueType,
    another: QueryFieldValueType
  ): boolean {
    if (QueryField.isEmpty(one) && QueryField.isEmpty(another)) {
      return true;
    }
    return one === another;
  }

  private value: QueryFieldValueType = QueryField.emptyValue;

  constructor(value: QueryFieldInputValueType) {
    this.value = QueryField.isEmpty(value)
      ? QueryField.emptyValue
      : (value as QueryFieldValueType);
  }

  get(): QueryFieldValueType {
    return this.value;
  }

  isEmpty() {
    return QueryField.isEmpty(this.value);
  }
}

type UseQueryFieldConfigType = {
  name: QueryFieldNameType;
  defaultValue?: QueryFieldValueType;
};

export function useQueryField(config: UseQueryFieldConfigType) {
  const [params, setParams] = useSearchParams();

  const givenValue = new QueryField(params.get(config.name));
  const defaultValue = new QueryField(config.defaultValue);

  const [currentValue, _setCurrentValue] = useState(
    givenValue.isEmpty() ? defaultValue.get() : givenValue.get()
  );

  const setCurrentValue = (value: QueryFieldValueType) => {
    const candidate = new QueryField(value);
    _setCurrentValue(candidate.get());
  };

  useEffect(() => {
    const current = new QueryField(currentValue);

    if (current.isEmpty()) {
      params.delete(config.name);
      setParams(params);
    } else {
      params.set(config.name, current.get() as string);
      setParams(params);
    }
  }, [currentValue, setParams]);

  return {
    defaultValue: defaultValue.get(),
    currentValue,
    set: setCurrentValue,
    handleChange: (event: React.ChangeEvent<FieldElementType>) =>
      setCurrentValue(event.currentTarget.value),
    clear: () => setCurrentValue(defaultValue.get()),
    label: { props: { htmlFor: config.name } },
    input: { props: { id: config.name, name: config.name } },
    changed: !QueryField.compare(currentValue, defaultValue.get()),
    unchanged: QueryField.compare(currentValue, defaultValue.get()),
    empty: QueryField.isEmpty(currentValue),
  };
}
