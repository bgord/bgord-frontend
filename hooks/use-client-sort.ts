/**
 * Hook for client-side sorting with configurable strategies
 * @module useClientSort
 */
import { useMemo, useCallback } from "react";
import { Field, FieldValueAllowedTypes } from "./field";
import {
  FieldElementType,
  useField,
  useFieldConfigType,
  useFieldReturnType,
  useFieldStrategyEnum,
} from "./use-field";

type useClientSortOptionType = string;

type useClientSortFnType<X> = (a: X, b: X) => number;

/**
 * Configuration for sort behavior
 * @template X Type of items being sorted
 */
type useClientSortConfigType<X> = Omit<
  useFieldConfigType<useClientSortOptionType>,
  "strategy"
> & {
  enum: Record<useClientSortOptionType, useClientSortOptionType> & {
    default: useClientSortOptionType;
  };
  options: Record<useClientSortOptionType, useClientSortFnType<X>>;
};

/**
 * Hook return value
 * @template X Type of items being sorted
 * @template T Type of field value
 */
type useClientSortReturnType<X, T extends FieldValueAllowedTypes> = {
  sortFn: useClientSortFnType<X>;
  options: useClientSortOptionType[];
} & useFieldReturnType<T> & {
    strategy: useFieldStrategyEnum.local;
  };

/** Default no-op sort function */
/** @public */
export const defaultSortFn = () => 0;

/**
 * Hook for managing client-side sorting state and functions
 * @template X Type of items being sorted
 * @param config Sort configuration
 * @returns Sort state and handlers
 * @throws {Error} If invalid sort option provided
 */
export function useClientSort<X>(
  config: useClientSortConfigType<X>
): useClientSortReturnType<X, useClientSortOptionType> {
  const field = useField<useClientSortOptionType>({
    name: config.name,
    defaultValue: config.enum.default,
    strategy: useFieldStrategyEnum.local,
  });

  // Memoize options array to prevent unnecessary rerenders
  const sortOptions = useMemo(
    () => Object.keys(config.options) as useClientSortOptionType[],
    [config.options]
  );

  // Memoize change handler
  const handleChange = useCallback(
    (event: React.ChangeEvent<FieldElementType>) => {
      const newSort = event.currentTarget.value;
      const isNewSortInEnum = Boolean(config.enum[String(newSort)]);
      field.set(isNewSortInEnum ? newSort : config.enum.default);
    },
    [config.enum, field.set]
  );

  // Memoize sort function based on current value
  const sortFn = useMemo(() => {
    if (Field.compare(field.currentValue, config.enum.default)) {
      return defaultSortFn;
    }
    return config.options[field.value] ?? defaultSortFn;
  }, [field.currentValue, field.value, config.enum.default, config.options]);

  if (Field.compare(field.currentValue, config.enum.default)) {
    return {
      sortFn,
      options: sortOptions,
      ...field,
      handleChange,
      strategy: useFieldStrategyEnum.local,
    };
  }

  return {
    sortFn,
    options: sortOptions,
    ...field,
    handleChange,
    strategy: useFieldStrategyEnum.local,
  };
}
