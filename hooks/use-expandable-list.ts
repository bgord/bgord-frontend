import { useState, useEffect } from "react";

export enum UseExpandableListState {
  contracted = "contracted",
  expanded = "expanded",
}

export type UseExpandableListConfigType = { max: number; length: number };

export type UseExpandableListReturnType = {
  state: UseExpandableListState;
  displayShowMore: boolean;
  displayShowLess: boolean;
  actions: {
    showMore: VoidFunction;
    showLess: VoidFunction;
  };
  numberOfExcessiveElements: number;
  filterFn: (element: unknown, index: number) => void;
};

export function useExpandableList(
  config: UseExpandableListConfigType
): UseExpandableListReturnType {
  const numberOfExcessiveElements = config.length - config.max;
  const areThereExcessiveElements = config.length > config.max;

  function getState() {
    return areThereExcessiveElements
      ? UseExpandableListState.contracted
      : UseExpandableListState.expanded;
  }

  const [state, setState] = useState<UseExpandableListState>(getState);

  useEffect(() => setState(getState()), [config.length, config.max]);

  function showMore() {
    if (state === UseExpandableListState.contracted) {
      setState(UseExpandableListState.expanded);
    }
  }

  function showLess() {
    if (state === UseExpandableListState.expanded) {
      setState(UseExpandableListState.contracted);
    }
  }

  function filterFn(_element: unknown, index: number) {
    if (state === UseExpandableListState.expanded) return true;
    return index < config.max;
  }

  return {
    state,
    displayShowMore: state === UseExpandableListState.contracted,
    displayShowLess:
      state === UseExpandableListState.expanded && areThereExcessiveElements,
    actions: {
      showMore,
      showLess,
    },
    numberOfExcessiveElements,
    filterFn,
  };
}
