/**
 * Hook for client-side filtering with customizable filter functions
 * @module useClientFilter
 */
import { useCallback, useMemo } from "react";
import { Field, FieldValueAllowedTypes } from "./field";
import { useField, useFieldConfigType, useFieldReturnType, useFieldStrategyEnum } from "./use-field";

export type useClientFilterQueryType = string | undefined;

/**
 * Configuration for client filter
 * @template T Type of value being filtered
 */
type useClientFilterConfigType<T extends FieldValueAllowedTypes> = Omit<useFieldConfigType<T>, "strategy"> & {
  enum: { [key: string]: useClientFilterQueryType };
  filterFn?: (value: T) => boolean;
};

/**
 * Return type for useClientFilter hook
 * @template T Type of value being filtered
 */
export type useClientFilterReturnType<T extends FieldValueAllowedTypes> = useFieldReturnType<T> & {
  filterFn: NonNullable<useClientFilterConfigType<T>["filterFn"]>;
  options: {
    name: string;
    value: useClientFilterConfigType<T>["enum"][0];
  }[];
} & {
  strategy: useFieldStrategyEnum.local;
};

/**
 * Hook for managing client-side filtering state and filter functions
 *
 * @example
 * ```tsx
 * function FilterableList() {
 *   const filter = useClientFilter({
 *     name: 'status-filter',
 *     defaultValue: 'all',
 *     enum: {
 *       all: undefined,
 *       active: 'active',
 *       completed: 'completed'
 *     }
 *   });
 *
 *   return (
 *     <div>
 *       <select value={filter.value} onChange={filter.handleChange}>
 *         {filter.options.map(option => (
 *           <option key={option.name} value={option.value ?? ''}>
 *             {option.name}
 *           </option>
 *         ))}
 *       </select>
 *       {items.filter(filter.filterFn).map(item => (
 *         <div key={item.id}>{item.name}</div>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 *
 * @template T - Type of values being filtered
 * @param config - Filter configuration
 * @param config.name - Unique identifier for filter
 * @param config.defaultValue - Initial filter value
 * @param config.enum - Object mapping filter names to values
 * @param config.filterFn - Optional custom filter function
 *
 * @returns Object containing filter state and functions
 * @returns {T} value - Current filter value
 * @returns {Function} handleChange - Event handler for filter changes
 * @returns {Function} filterFn - Function to filter items
 * @returns {Array} options - Available filter options
 * @returns {useFieldStrategyEnum.local} strategy - Filter strategy type
 */
export function useClientFilter<T extends FieldValueAllowedTypes>(
  config: useClientFilterConfigType<T>,
): useClientFilterReturnType<T> {
  const query = useField({
    ...config,
    strategy: useFieldStrategyEnum.local,
  });

  const defaultFilterFn = useCallback(
    (given: T) => {
      if (query.empty) return true;
      return Field.compare(given, query.currentValue);
    },
    [query.empty, query.currentValue],
  );

  // Memoize filter function (either custom or default)
  const filterFn = useMemo(() => config.filterFn ?? defaultFilterFn, [config.filterFn, defaultFilterFn]);

  // Memoize options array
  const options = useMemo(
    () => Object.entries(config.enum).map(([name, value]) => ({ name, value })),
    [config.enum],
  );

  return useMemo(
    () => ({
      ...query,
      filterFn,
      options,
      strategy: useFieldStrategyEnum.local as const,
    }),
    [query, filterFn, options],
  );
}
