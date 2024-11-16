import { useState, useCallback, useMemo } from "react";

export type UseToggleValueType = boolean;

/**
 * Configuration options for the useToggle hook
 */
export type UseToggleConfigType = {
  /** Unique identifier for the toggle component */
  name: string;
  /** Initial state of the toggle */
  defaultValue?: UseToggleValueType;
};

/**
 * Props for accessibility and DOM attributes
 */
type UseToggleProps = {
  /** Controller element props (button) */
  controller: {
    "aria-expanded": "true" | "false";
    "aria-controls": string;
    role: "button";
    tabIndex: 0;
  };
  /** Target element props (controlled region) */
  target: {
    id: string;
    role: "region";
    "aria-hidden": "true" | "false";
  };
};

/**
 * Return type for useToggle hook
 */
export type UseToggleReturnType = {
  /** Current on state */
  on: UseToggleValueType;
  /** Current off state (inverse of on) */
  off: UseToggleValueType;
  /** Set state to on */
  enable: () => void;
  /** Set state to off */
  disable: () => void;
  /** Toggle current state */
  toggle: () => void;
  /** Accessibility and DOM props */
  props: UseToggleProps;
};

/**
 * A hook for managing toggle state with accessibility support.
 * Provides controlled show/hide functionality with proper ARIA attributes.
 *
 * @param config - Configuration options for the toggle
 * @returns Object containing toggle state, controls, and accessibility props
 *
 * @example
 * ```tsx
 * // Basic usage
 * const { on, toggle, props } = useToggle({ name: 'menu' });
 *
 * return (
 *   <>
 *     <button onClick={toggle} {...props.controller}>
 *       Toggle Menu
 *     </button>
 *     <div {...props.target}>
 *       {on && <div>Menu Content</div>}
 *     </div>
 *   </>
 * );
 *
 * // With default value
 * const { on, enable, disable } = useToggle({
 *   name: 'modal',
 *   defaultValue: true
 * });
 * ```
 */
export function useToggle({
  name,
  defaultValue = false,
}: UseToggleConfigType): UseToggleReturnType {
  const [on, setIsOn] = useState<UseToggleValueType>(defaultValue);

  // Memoize callbacks for better performance
  const enable = useCallback(() => setIsOn(true), []);
  const disable = useCallback(() => setIsOn(false), []);
  const toggle = useCallback(() => setIsOn((v) => !v), []);

  // Memoize off state to prevent unnecessary recalculations
  const off = useMemo(() => !on, [on]);

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
    off,
    enable,
    disable,
    toggle,
    props,
  };
}

/**
 * Utility function to extract toggle props from a combined props object.
 * Useful when you want to combine toggle props with other props.
 *
 * @template T - Type of the additional props
 * @param props - Combined props object
 * @returns Object containing separated toggle and additional props
 *
 * @example
 * ```tsx
 * interface ButtonProps {
 *   className?: string;
 *   style?: React.CSSProperties;
 * }
 *
 * const allProps = {
 *   on: true,
 *   off: false,
 *   enable: () => {},
 *   disable: () => {},
 *   toggle: () => {},
 *   props: toggleProps,
 *   className: 'my-button',
 *   style: { color: 'blue' }
 * };
 *
 * const { toggle, rest } = extractUseToggle<ButtonProps>(allProps);
 * // toggle contains UseToggleReturnType props
 * // rest contains ButtonProps
 * ```
 */
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
