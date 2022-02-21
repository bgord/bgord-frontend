import React from "react";

import { usePreviousValue } from "./hooks/use-previous-value";

export enum AnimaState {
  appearing = "appearing",
  appeared = "appeared",
  hidding = "hidding",
  hidden = "hidden",
}

export type AnimaEffectType = string;

export type AnimaConfigType = {
  children: JSX.Element;

  visible: boolean;
  effect: AnimaEffectType;

  duration?: number;
  isInitial?: boolean;
};

export function Anima(props: AnimaConfigType) {
  const duration = props.duration ?? 300;

  function getInitialState() {
    if (!props.visible) return AnimaState.hidden;
    if (props.isInitial) return AnimaState.appeared;
    return AnimaState.appearing;
  }

  const [state, setState] = React.useState<AnimaState>(getInitialState);
  const previousState = usePreviousValue(state);

  React.useEffect(() => {
    if (props.isInitial) return;

    if (props.visible) {
      setState(AnimaState.appearing);
      setTimeout(() => setState(AnimaState.appeared), 100);
    } else {
      if (!previousState) return;
      setState(AnimaState.hidding);
      setTimeout(() => setState(AnimaState.hidden), duration);
    }
  }, [props.visible]);

  if (state === AnimaState.hidden) return null;

  return React.cloneElement(props.children, {
    "data-anima": state,
    "data-anima-effect": props.effect,
    style: { "--duration": `${duration}ms`, ...props.children.props.style },
  });
}
