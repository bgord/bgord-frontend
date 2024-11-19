import { useEffect } from "react";

/**
 * Type defining which HTML elements can receive focus
 */
export type FocusableElement =
  | HTMLInputElement
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLTextAreaElement
  | HTMLSelectElement
  | HTMLDivElement // For contenteditable or tabIndex elements
  | HTMLSpanElement; // For contenteditable or tabIndex elements

/**
 * Configuration type for useAutofocus hook
 */
export type UseAutofocusConfigType = Readonly<{
  /** Reference to the element to focus */
  readonly ref: React.RefObject<FocusableElement>;
  /** Condition that determines if focus should be applied */
  readonly condition: boolean;
}>;

/**
 * Hook for automatically focusing an element based on a condition
 *
 * @description
 * This hook will focus the provided element when the condition becomes true.
 * It handles cleanup and prevents memory leaks by clearing focus when unmounting
 * or when condition becomes false.
 *
 * @example
 * ```tsx
 * function SearchInput() {
 *   const inputRef = useRef<HTMLInputElement>(null);
 *   const [isSearchActive, setSearchActive] = useState(false);
 *
 *   useAutofocus({
 *     ref: inputRef,
 *     condition: isSearchActive
 *   });
 *
 *   return <input ref={inputRef} type="search" />;
 * }
 * ```
 *
 * @example
 * ```tsx
 * function Modal() {
 *   const dialogRef = useRef<HTMLDivElement>(null);
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   useAutofocus({
 *     ref: dialogRef,
 *     condition: isOpen
 *   });
 *
 *   return (
 *     <div ref={dialogRef} role="dialog" tabIndex={-1}>
 *       Modal content
 *     </div>
 *   );
 * }
 * ```
 *
 * @param config - Configuration object for the hook
 */
export function useAutofocus({ ref, condition }: UseAutofocusConfigType): void {
  useEffect(() => {
    // Only proceed if condition is true
    if (!condition) {
      return;
    }

    // Store current element reference for cleanup
    const element = ref.current;

    if (element) {
      // Focus the element
      element.focus();

      // Cleanup function
      return () => {
        // Only blur if this element is currently focused
        if (document.activeElement === element) {
          element.blur();
        }
      };
    }
  }, [ref, condition]); // Include all dependencies
}
