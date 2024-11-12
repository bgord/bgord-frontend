import {
  UseNewFieldConfigType,
  UseNewFieldReturnType,
  useNewField,
} from "./use-new-field";
import { FieldValueAllowedTypes, Field } from "./field";

export type UseClientFilterQueryType = string | undefined;

export type UseClientFilterConfigType<T extends FieldValueAllowedTypes> =
  UseNewFieldConfigType<T> & {
    enum: { [key: string]: UseClientFilterQueryType };
    filterFn?: (value: T) => boolean;
  };

export type UseClientFilterReturnType<T extends FieldValueAllowedTypes> =
  UseNewFieldReturnType<T> & {
    filterFn: NonNullable<UseClientFilterConfigType<T>["filterFn"]>;
    options: { name: string; value: UseClientFilterConfigType<T>["enum"][0] }[];
  };

export function useClientFilter<T extends FieldValueAllowedTypes>(
  config: UseClientFilterConfigType<T>,
): UseClientFilterReturnType<T> {
  const query = useNewField(config);

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
