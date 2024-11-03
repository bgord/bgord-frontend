import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export type FieldElementType =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

type QueryFieldNameType = string;

type QueryFieldValueType = string | undefined | null;

export class QueryField {
  static emptyValue = null;

  static isEmpty(value: QueryFieldValueType): boolean {
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
}

type UseQueryFieldConfigType = {
  name: QueryFieldNameType;
  defaultValue?: QueryFieldValueType;
};

export function useQueryField(config: UseQueryFieldConfigType) {
  const [params, setParams] = useSearchParams();

  const givenValue = QueryField.isEmpty(params.get(config.name))
    ? QueryField.emptyValue
    : params.get(config.name);

  const defaultValue = config.defaultValue ?? QueryField.emptyValue;

  const [currentValue, _setCurrentValue] = useState(
    givenValue ? givenValue : defaultValue
  );

  const setCurrentValue = (value: QueryFieldValueType) => {
    if (QueryField.isEmpty(value)) {
      _setCurrentValue(QueryField.emptyValue);
    } else {
      _setCurrentValue(value as string);
    }
  };

  useEffect(() => {
    if (QueryField.isEmpty(currentValue)) {
      params.delete(config.name);
      setParams(params);
    } else {
      params.set(config.name, currentValue as string);
      setParams(params);
    }
  }, [currentValue, setParams]);

  return {
    defaultValue,
    currentValue,
    set: setCurrentValue,
    handleChange: (event: React.ChangeEvent<FieldElementType>) =>
      setCurrentValue(event.currentTarget.value),
    clear: () => setCurrentValue(defaultValue),
    label: { props: { htmlFor: config.name } },
    input: { props: { id: config.name, name: config.name } },
    changed: !QueryField.compare(currentValue, defaultValue),
    unchanged: QueryField.compare(currentValue, defaultValue),
    empty: QueryField.isEmpty(currentValue),
  };
}
