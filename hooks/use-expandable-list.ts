import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * Enum representing possible states of the expandable list
 */
export enum UseExpandableListState {
  contracted = "contracted",
  expanded = "expanded",
}

/**
 * Configuration type for the expandable list
 */
type UseExpandableListConfigType = {
  /** Maximum number of items to show when contracted */
  max: number;
  /** Total length of the list */
  length: number;
};

/**
 * Return type for the useExpandableList hook
 */
type UseExpandableListReturnType = {
  /** Current state of the list */
  state: UseExpandableListState;
  /** Whether to display "Show More" button */
  displayShowMore: boolean;
  /** Whether to display "Show Less" button */
  displayShowLess: boolean;
  /** Actions to expand/contract the list */
  actions: {
    showMore: VoidFunction;
    showLess: VoidFunction;
  };
  /** Number of elements hidden when contracted */
  numberOfExcessiveElements: number;
  /** Filter function to apply to list items */
  filterFn: (element: unknown, index: number) => boolean;
};

/**
 * Hook to manage an expandable/collapsible list with "show more/less" functionality
 *
 * @description
 * This hook provides state management and utilities for creating expandable lists
 * that can show a limited number of items initially and expand to show all items.
 *
 * @example
 * ```tsx
 * function ExpandableList({ items }: { items: string[] }) {
 *   const list = useExpandableList({
 *     max: 3,
 *     length: items.length,
 *   });
 *
 *   return (
 *     <div>
 *       {items.filter(list.filterFn).map((item, index) => (
 *         <div key={index}>{item}</div>
 *       ))}
 *
 *       {list.displayShowMore && (
 *         <button onClick={list.actions.showMore}>
 *           Show {list.numberOfExcessiveElements} more
 *         </button>
 *       )}
 *
 *       {list.displayShowLess && (
 *         <button onClick={list.actions.showLess}>
 *           Show less
 *         </button>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 *
 * @param config - Configuration object for the expandable list
 * @returns Object containing list state and controls
 */
export function useExpandableList(
  config: UseExpandableListConfigType,
): UseExpandableListReturnType {
  // Memoize computed values
  const { numberOfExcessiveElements, areThereExcessiveElements } = useMemo(
    () => ({
      numberOfExcessiveElements: config.length - config.max,
      areThereExcessiveElements: config.length > config.max,
    }),
    [config.length, config.max],
  );

  // Memoize initial state calculation
  const getState = useCallback(
    () =>
      areThereExcessiveElements
        ? UseExpandableListState.contracted
        : UseExpandableListState.expanded,
    [areThereExcessiveElements],
  );

  const [state, setState] = useState<UseExpandableListState>(getState);

  // Update state when config changes
  useEffect(() => setState(getState()), [getState]);

  // Memoize action handlers
  const actions = useMemo(
    () => ({
      showMore: () => {
        if (state === UseExpandableListState.contracted) {
          setState(UseExpandableListState.expanded);
        }
      },
      showLess: () => {
        if (state === UseExpandableListState.expanded) {
          setState(UseExpandableListState.contracted);
        }
      },
    }),
    [state],
  );

  // Memoize filter function
  const filterFn = useCallback(
    (_element: unknown, index: number): boolean => {
      if (state === UseExpandableListState.expanded) return true;
      return index < config.max;
    },
    [state, config.max],
  );

  // Memoize display flags
  const displayFlags = useMemo(
    () => ({
      displayShowMore: state === UseExpandableListState.contracted,
      displayShowLess:
        state === UseExpandableListState.expanded && areThereExcessiveElements,
    }),
    [state, areThereExcessiveElements],
  );

  return {
    state,
    ...displayFlags,
    actions,
    numberOfExcessiveElements,
    filterFn,
  };
}
