import { useState } from "react";

export type FieldElementType =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

type QueryFieldNameType = string;

type QueryFieldValueType = string | undefined;

class QueryField {
  static emptyValue = undefined;

  static isEmpty(value: QueryFieldValueType): boolean {
    return value === undefined || value === "";
  }

  static compare(
    one: QueryFieldValueType,
    another: QueryFieldValueType,
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
  const defaultValue = config.defaultValue ?? QueryField.emptyValue;

  const [currentValue, setCurrentValue] = useState(defaultValue);

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
