import {
  FieldElementType,
  UseNewFieldConfigType,
  UseNewFieldReturnType,
  UseNewFieldStrategyEnum,
  useNewField,
} from "./use-new-field";
import { FieldValueAllowedTypes, Field } from "./field";

type UseNewClientSortOptionType = string;

type UseNewClientSortFnType<X> = (a: X, b: X) => number;

type UseNewClientSortConfigType<X> = Omit<
  UseNewFieldConfigType<UseNewClientSortOptionType>,
  "strategy"
> & {
  enum: Record<UseNewClientSortOptionType, UseNewClientSortOptionType> & {
    default: UseNewClientSortOptionType;
  };
  options: Record<UseNewClientSortOptionType, UseNewClientSortFnType<X>>;
};

type UseNewClientSortReturnType<X, T extends FieldValueAllowedTypes> = {
  sortFn: UseNewClientSortFnType<X>;
  options: UseNewClientSortOptionType[];
} & UseNewFieldReturnType<T> & {
    strategy: UseNewFieldStrategyEnum.local;
  };

/** @public */
export const defaultSortFn = () => 0;

export function useNewClientSort<X>(
  config: UseNewClientSortConfigType<X>,
): UseNewClientSortReturnType<X, UseNewClientSortOptionType> {
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
      strategy: UseNewFieldStrategyEnum.local,
    };
  }
  return {
    sortFn: config.options[field.value] ?? defaultSortFn,
    options: Object.keys(config.options) as UseNewClientSortOptionType[],
    ...field,
    handleChange,
    strategy: UseNewFieldStrategyEnum.local,
  };
}
