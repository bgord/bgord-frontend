import { useState } from "react";

export type UseToggleValueType = boolean;

export type UseToggleConfigType = UseToggleValueType;

export type UseToggleReturnType = {
  on: UseToggleValueType;
  off: UseToggleValueType;
  enable: VoidFunction;
  disable: VoidFunction;
  toggle: VoidFunction;
};

export function useToggle(
  defaultValue: UseToggleConfigType = false
): UseToggleReturnType {
  const [on, setIsOn] = useState(defaultValue);

  const enable = () => setIsOn(true);
  const disable = () => setIsOn(false);
  const toggle = () => setIsOn((v) => !v);

  return { on, off: !on, enable, disable, toggle };
}
