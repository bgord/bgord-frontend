import { useWindowDimensions } from "./use-window-dimensions";

export type BreakpointType = number;

export type UseBreakpointReturnType = boolean;

export function useBreakpoint(
  breakpoint: BreakpointType
): UseBreakpointReturnType {
  const dimensions = useWindowDimensions();
  const width = dimensions?.width ?? 0;

  return width <= breakpoint;
}
