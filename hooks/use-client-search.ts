/**
 * Hook for client-side search with string filtering
 * @module useClientSearch
 */
import { useCallback, useMemo } from "react";
import { Field } from "./field";
import { useField, useFieldConfigType, useFieldReturnType, useFieldStrategyEnum } from "./use-field";

type useClientSearchQueryType = string;

/**
 * Configuration options for client search
 */
type useClientSearchConfigType = Pick<useFieldConfigType<useClientSearchQueryType>, "name">;

/**
 * Return type for useClientSearch hook
 */
export type useClientSearchReturnType = useFieldReturnType<useClientSearchQueryType> & {
  filterFn: (value: string) => boolean;
} & {
  strategy: useFieldStrategyEnum.local;
};

/**
 * Hook for managing client-side search state and filtering
 *
 * @example
 * ```tsx
 * function SearchableList() {
 *   const search = useClientSearch({ name: 'list-search' });
 *
 *   return (
 *     <div>
 *       <input
 *         value={search.value}
 *         onChange={search.handleChange}
 *         placeholder="Search..."
 *       />
 *       {items.filter(item => search.filterFn(item.name)).map(item => (
 *         <div key={item.id}>{item.name}</div>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 *
 * @param config - Search configuration options
 * @param config.name - Unique identifier for the search field
 *
 * @returns Object containing search state and filter function
 * @returns {string} value - Current search query
 * @returns {Function} handleChange - Event handler for input changes
 * @returns {Function} filterFn - Function to filter items by search query
 * @returns {useFieldStrategyEnum.local} strategy - Search strategy type
 */
export function useClientSearch(config: useClientSearchConfigType): useClientSearchReturnType {
  const query = useField<useClientSearchQueryType>({
    name: config.name,
    defaultValue: "",
    strategy: useFieldStrategyEnum.local,
  });

  // Memoize filter function to prevent recreation on each render
  const filterFn = useCallback(
    (given: string) => {
      const currentQuery = new Field<useClientSearchQueryType>(query.currentValue);
      if (currentQuery.isEmpty()) return true;

      const searchValue = currentQuery.get().toLowerCase();
      return given?.toLowerCase().includes(searchValue);
    },
    [query.currentValue],
  );

  // Memoize return object to maintain reference stability
  return useMemo(
    () => ({
      ...query,
      filterFn,
      strategy: useFieldStrategyEnum.local as const,
    }),
    [query, filterFn],
  );
}
