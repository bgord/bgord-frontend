import { useState } from "react";

export type UseToggleReturnType = {
  on: boolean;
  off: boolean;
  enable: VoidFunction;
  disable: VoidFunction;
  toggle: VoidFunction;
};

export function useToggle(defaultValue = false): UseToggleReturnType {
  const [on, setIsOn] = useState(defaultValue);

  const enable = () => setIsOn(true);
  const disable = () => setIsOn(false);
  const toggle = () => setIsOn((v) => !v);

  return { on, off: !on, enable, disable, toggle };
}
