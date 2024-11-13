import {
  FieldElementType,
  UseNewFieldConfigType,
  UseNewFieldReturnType,
  UseNewFieldStrategyEnum,
  useNewField,
} from "./use-new-field";
import { FieldValueAllowedTypes, Field } from "./field";

export type UseNewClientSortFnType<T> = (a: T, b: T) => number;

type UseNewClientSortConfigType<T extends FieldValueAllowedTypes> = Omit<
  UseNewFieldConfigType<T>,
  "strategy"
> & {
  enum: Record<UseNewClientSortOptionType, UseNewClientSortOptionType> & {
    default: UseNewClientSortOptionType;
  };
  options: Record<UseNewClientSortOptionType, UseNewClientSortFnType<T>>;
};

export type UseNewClientSortReturnType<T extends FieldValueAllowedTypes> = {
  sortFn: UseNewClientSortFnType<T>;
  options: UseNewClientSortOptionType[];
} & UseNewFieldReturnType<UseNewClientSortOptionType>;

export type UseNewClientSortOptionType = string;

/** @public */
export const defaultSortFn = () => 0;

export function useNewClientSort<T extends FieldValueAllowedTypes>(
  config: UseNewClientSortConfigType<T>,
): UseNewClientSortReturnType<T> {
  const field = useNewField<UseNewClientSortOptionType>({
    name: config.name,
    defaultValue: config.enum.default,
    strategy: UseNewFieldStrategyEnum.local,
  });

  const handleChange: (event: React.ChangeEvent<FieldElementType>) => void = (
    event,
  ) => {
    const newSort = event.currentTarget.value;
    const isNewSortInEnum = Boolean(config.enum[String(newSort)]);

    field.set(isNewSortInEnum ? newSort : config.enum.default);
  };

  if (Field.compare(field.currentValue, config.enum.default)) {
    return {
      sortFn: defaultSortFn,
      options: Object.keys(config.options) as UseNewClientSortOptionType[],
      ...field,
      handleChange,
    };
  }
  return {
    sortFn: config.options[field.value] ?? defaultSortFn,
    options: Object.keys(config.options) as UseNewClientSortOptionType[],
    ...field,
    handleChange,
  };
}
