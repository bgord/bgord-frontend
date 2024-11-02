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
      "aria-expanded": JSX.IntrinsicElements["div"]["aria-expanded"];
      "aria-controls": JSX.IntrinsicElements["div"]["aria-controls"];
    };
    target: { id: JSX.IntrinsicElements["div"]["id"] };
  };
};

export function useToggle(
  defaultValue: UseToggleConfigType = false,
  name?: string,
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
      controller: {
        "aria-expanded": on ? "true" : "false",
        "aria-controls": name,
      },
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
