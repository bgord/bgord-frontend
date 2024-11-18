import { Field, FieldValueAllowedTypes } from "./field";
import { useField, useFieldConfigType, useFieldReturnType, useFieldStrategyEnum } from "./use-field";

export type useClientFilterQueryType = string | undefined;

type useClientFilterConfigType<T extends FieldValueAllowedTypes> = Omit<useFieldConfigType<T>, "strategy"> & {
  enum: { [key: string]: useClientFilterQueryType };
  filterFn?: (value: T) => boolean;
};

export type useClientFilterReturnType<T extends FieldValueAllowedTypes> = useFieldReturnType<T> & {
  filterFn: NonNullable<useClientFilterConfigType<T>["filterFn"]>;
  options: {
    name: string;
    value: useClientFilterConfigType<T>["enum"][0];
  }[];
} & {
  strategy: useFieldStrategyEnum.local;
};

export function useClientFilter<T extends FieldValueAllowedTypes>(
  config: useClientFilterConfigType<T>,
): useClientFilterReturnType<T> {
  const query = useField({
    ...config,
    strategy: useFieldStrategyEnum.local,
  });

  function defaultFilterFn(given: T) {
    if (query.empty) return true;
    return Field.compare(given, query.currentValue);
  }

  const filterFn = config.filterFn ?? defaultFilterFn;
  const options = Object.entries(config.enum).map(([name, value]) => ({
    name,
    value,
  }));

  return {
    ...query,
    filterFn,
    options,
    strategy: useFieldStrategyEnum.local,
  };
}
