import { useState } from "react";

export type UseToggleValueType = boolean;

export type UseToggleConfigType = UseToggleValueType;

export type UseToggleReturnType = {
  on: UseToggleValueType;
  off: UseToggleValueType;
  enable: VoidFunction;
  disable: VoidFunction;
  toggle: VoidFunction;
  props: {
    controller: {
      "aria-expanded": string;
      "aria-controls": string | undefined;
    };
    target: { id: string | undefined };
  };
};

export function useToggle(
  defaultValue: UseToggleConfigType = false,
  name?: string
): UseToggleReturnType {
  const [on, setIsOn] = useState(defaultValue);

  const enable = () => setIsOn(true);
  const disable = () => setIsOn(false);
  const toggle = () => setIsOn((v) => !v);

  return {
    on,
    off: !on,
    enable,
    disable,
    toggle,
    props: {
      controller: { "aria-expanded": String(on), "aria-controls": name },
      target: { id: name },
    },
  };
}

export function extractUseToggle<X>(_props: UseToggleReturnType & X): {
  toggle: UseToggleReturnType;
  rest: X;
} {
  const { on, off, enable, disable, toggle, props, ...rest } = _props;

  return {
    toggle: { on, off, enable, disable, toggle, props },
    rest: rest as X,
  };
}
