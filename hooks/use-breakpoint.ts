import { useWindowDimensions } from "./use-window-dimensions";

export type BreakpointType = number;

export function useBreakpoint(breakpoint: BreakpointType): boolean {
  const dimensions = useWindowDimensions();
  const width = dimensions?.width ?? 0;

  return width <= breakpoint;
}
