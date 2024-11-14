import { useState, useCallback, useMemo } from "react";

export type UseToggleValueType = boolean;

export type UseToggleConfigType = {
  name: string;
  defaultValue?: UseToggleValueType;
};

type UseToggleProps = {
  controller: {
    "aria-expanded": "true" | "false";
    "aria-controls": string;
    role: "button";
    tabIndex: 0;
  };
  target: {
    id: string;
    role: "region";
    "aria-hidden": "true" | "false";
  };
};

export type UseToggleReturnType = {
  /** Current on state */
  on: UseToggleValueType;
  /** Current off state (inverse of on) */
  off: UseToggleValueType;
  /** Set state to on */
  enable: VoidFunction;
  /** Set state to off */
  disable: VoidFunction;
  /** Toggle current state */
  toggle: VoidFunction;
  /** Accessibility and DOM props */
  props: UseToggleProps;
};

export function useToggle({
  name,
  defaultValue = false,
}: UseToggleConfigType): UseToggleReturnType {
  const [on, setIsOn] = useState(defaultValue);

  const enable = useCallback(() => setIsOn(true), []);
  const disable = useCallback(() => setIsOn(false), []);
  const toggle = useCallback(() => setIsOn((v) => !v), []);

  // Memoize props to prevent unnecessary re-renders
  const props = useMemo(
    () =>
      ({
        controller: {
          "aria-expanded": on ? "true" : "false",
          "aria-controls": name,
          role: "button" as const,
          tabIndex: 0,
        },
        target: {
          id: name,
          role: "region" as const,
          "aria-hidden": on ? "false" : "true",
        },
      } as UseToggleProps),
    [on, name]
  );

  return {
    on,
    off: !on,
    enable,
    disable,
    toggle,
    props,
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
