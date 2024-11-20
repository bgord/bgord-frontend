import { Ref, useCallback, useMemo, useRef } from "react";
import { useKeyboardShortcuts } from "./use-keyboard-shortcuts";

/**
 * Type for elements that can receive focus
 */
type FocusableElement = HTMLElement & { focus(): void };

/**
 * Hook to create a keyboard shortcut that focuses an element
 *
 * @description
 * This hook creates a ref and associates a keyboard shortcut with focusing that element.
 * It supports any HTML element that can receive focus, defaulting to HTMLInputElement.
 *
 * @example
 * ```tsx
 * function SearchInput() {
 *   const { ref } = useFocusKeyboardShortcut('ctrl+k');
 *
 *   return (
 *     <input
 *       ref={ref}
 *       type="search"
 *       placeholder="Press Ctrl+K to focus"
 *     />
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * function CustomButton() {
 *   const { ref } = useFocusKeyboardShortcut<HTMLButtonElement>('alt+b');
 *
 *   return (
 *     <button
 *       ref={ref}
 *       type="button"
 *     >
 *       Press Alt+B to focus
 *     </button>
 *   );
 * }
 * ```
 *
 * @template T - Type of the focusable element (defaults to HTMLInputElement)
 * @param shortcut - Keyboard shortcut to trigger focus (e.g., 'ctrl+k', 'alt+f')
 * @returns Object containing the ref for the focusable element
 */
export function useFocusKeyboardShortcut<
  T extends FocusableElement = HTMLInputElement,
>(shortcut: string): { ref: Ref<T> } {
  // Create ref for the focusable element
  const ref = useRef<T>(null);

  // Memoize the focus handler
  const handleFocus = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  // Set up keyboard shortcuts with memoized handler
  useKeyboardShortcuts({ [shortcut]: handleFocus });

  // Memoize return object to maintain reference stability
  return useMemo(() => ({ ref }), []);
}
