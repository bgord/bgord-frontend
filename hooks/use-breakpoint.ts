import { useMemo } from "react";
import { useWindowDimensions } from "./use-window-dimensions";

export type BreakpointType = number;
export type UseBreakpointReturnType = boolean;

/**
 * Hook to determine if the current window width is below or equal to a specified breakpoint
 *
 * @description
 * This hook provides a boolean indicating whether the current window width is less than
 * or equal to the specified breakpoint. It uses memoization to prevent unnecessary
 * recalculations and ensures proper cleanup on unmount.
 *
 * @param breakpoint - The width breakpoint in pixels
 *
 * @returns Boolean indicating if the current window width is less than or equal to the breakpoint
 *
 * @example
 * ```tsx
 * function ResponsiveComponent() {
 *   // Check if screen is mobile sized (<=768px)
 *   const isMobile = useBreakpoint(768);
 *
 *   return (
 *     <div>
 *       {isMobile ? (
 *         <MobileLayout />
 *       ) : (
 *         <DesktopLayout />
 *       )}
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * function Navigation() {
 *   // Check if screen is tablet sized or smaller (<=1024px)
 *   const isTabletOrSmaller = useBreakpoint(1024);
 *
 *   return (
 *     <nav>
 *       {isTabletOrSmaller ? (
 *         <HamburgerMenu />
 *       ) : (
 *         <FullMenu />
 *       )}
 *     </nav>
 *   );
 * }
 * ```
 *
 * Performance note: This hook uses memoization internally to prevent unnecessary
 * recalculations when the window dimensions or breakpoint haven't changed.
 */
export function useBreakpoint(
  breakpoint: BreakpointType,
): UseBreakpointReturnType {
  // Get window dimensions
  const dimensions = useWindowDimensions();

  // Get the current width, defaulting to 0 if dimensions are not available
  const width = dimensions?.width ?? 0;

  // Memoize the comparison result to prevent unnecessary recalculations
  // Only recalculate when width or breakpoint changes
  return useMemo(() => width <= breakpoint, [width, breakpoint]);
}
