import { Field, FieldValueAllowedTypes } from "./field";
import {
  FieldElementType,
  useFieldConfigType,
  useFieldReturnType,
  useFieldStrategyEnum,
  useField,
} from "./use-field";

type useClientSortOptionType = string;

type useClientSortFnType<X> = (a: X, b: X) => number;

type useClientSortConfigType<X> = Omit<useFieldConfigType<useClientSortOptionType>, "strategy"> & {
  enum: Record<useClientSortOptionType, useClientSortOptionType> & {
    default: useClientSortOptionType;
  };
  options: Record<useClientSortOptionType, useClientSortFnType<X>>;
};

type useClientSortReturnType<X, T extends FieldValueAllowedTypes> = {
  sortFn: useClientSortFnType<X>;
  options: useClientSortOptionType[];
} & useFieldReturnType<T> & {
    strategy: useFieldStrategyEnum.local;
  };

/** @public */
export const defaultSortFn = () => 0;

export function useClientSort<X>(
  config: useClientSortConfigType<X>,
): useClientSortReturnType<X, useClientSortOptionType> {
  const field = useField<useClientSortOptionType>({
    name: config.name,
    defaultValue: config.enum.default,
    strategy: useFieldStrategyEnum.local,
  });

  const handleChange: (event: React.ChangeEvent<FieldElementType>) => void = (event) => {
    const newSort = event.currentTarget.value;
    const isNewSortInEnum = Boolean(config.enum[String(newSort)]);

    field.set(isNewSortInEnum ? newSort : config.enum.default);
  };

  if (Field.compare(field.currentValue, config.enum.default)) {
    return {
      sortFn: defaultSortFn,
      options: Object.keys(config.options) as useClientSortOptionType[],
      ...field,
      handleChange,
      strategy: useFieldStrategyEnum.local,
    };
  }
  return {
    sortFn: config.options[field.value] ?? defaultSortFn,
    options: Object.keys(config.options) as useClientSortOptionType[],
    ...field,
    handleChange,
    strategy: useFieldStrategyEnum.local,
  };
}
