import {
  UseNewFieldConfigType,
  UseNewFieldReturnType,
  UseNewFieldStrategyEnum,
  useNewField,
} from "./use-new-field";
import { FieldValueAllowedTypes, Field } from "./field";

export type UseNewClientFilterQueryType = string | undefined;

export type UseNewClientFilterConfigType<T extends FieldValueAllowedTypes> =
  Omit<UseNewFieldConfigType<T>, "strategy"> & {
    enum: { [key: string]: UseNewClientFilterQueryType };
    filterFn?: (value: T) => boolean;
  };

export type UseNewClientFilterReturnType<T extends FieldValueAllowedTypes> =
  UseNewFieldReturnType<T> & {
    filterFn: NonNullable<UseNewClientFilterConfigType<T>["filterFn"]>;
    options: {
      name: string;
      value: UseNewClientFilterConfigType<T>["enum"][0];
    }[];
  };

export function useNewClientFilter<T extends FieldValueAllowedTypes>(
  config: UseNewClientFilterConfigType<T>,
): UseNewClientFilterReturnType<T> {
  const query = useNewField({
    ...config,
    strategy: UseNewFieldStrategyEnum.local,
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

  return { filterFn, options, ...query };
}
