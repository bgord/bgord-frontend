import { useState, useEffect } from "react";

export type UseExpandableListConfigType = { max: number; length: number };

export enum UseExpandableListState {
  contracted = "contracted",
  expanded = "expanded",
}

export function useExpandableList(config: UseExpandableListConfigType) {
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

  function filterFn(_element: any, index: number) {
    if (state === UseExpandableListState.expanded) return true;
    return index < config.max;
  }

  return {
    state,
    displayShowMore: state === UseExpandableListState.contracted,
    displayShowLess:
      state === UseExpandableListState.expanded && areThereExcessiveElements,
    showMore,
    showLess,
    numberOfExcessiveElements,
    filterFn,
  };
}
