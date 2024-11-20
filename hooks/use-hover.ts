import { useCallback, useEffect, useMemo, useRef } from "react";
import { UseToggleReturnType, useToggle } from "./use-toggle";

/**
 * Configuration options for the useHover hook
 */
type UseHoverConfigType = {
  /** Whether hover detection is enabled */
  enabled?: boolean;
};

/**
 * Return type for the useHover hook
 */
type UseHoverReturnType = {
  /** Props to attach to the target element */
  attach: {
    ref: React.RefObject<any>;
  };
  /** Current hover state */
  isHovering: UseToggleReturnType["on"];
};

/**
 * React hook for handling element hover states
 *
 * Provides a ref to attach to an element and tracks its hover state
 * using mouse events. Supports enabling/disabling hover detection.
 *
 * @param config - Optional configuration options
 * @returns Object containing ref to attach and current hover state
 *
 * @example
 * ```tsx
 * // Basic usage
 * const { attach, isHovering } = useHover();
 * return (
 *   <div ref={attach.ref}>
 *     {isHovering ? 'Hovering' : 'Not hovering'}
 *   </div>
 * );
 *
 * // With disabled hover detection
 * const { attach, isHovering } = useHover({ enabled: false });
 * ```
 */
export function useHover(config?: UseHoverConfigType): UseHoverReturnType {
  const enabled = config?.enabled ?? true;
  const ref = useRef<any>(null);
  const isHovering = useToggle({ name: "is-hovering" });

  // Memoize event handlers
  const handleMouseEnter = useCallback(isHovering.enable, []);
  const handleMouseLeave = useCallback(isHovering.disable, []);

  useEffect(() => {
    const node = ref.current;
    if (node && enabled) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (node && enabled) {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [enabled, handleMouseEnter, handleMouseLeave]); // Fixed dependencies array

  // Memoize return value
  return useMemo(() => ({ attach: { ref }, isHovering: isHovering.on && enabled }), [isHovering.on, enabled]);
}
