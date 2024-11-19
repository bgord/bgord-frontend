import { useCallback, useEffect } from "react";

/**
 * Hook to detect clicks outside a specified element with support for excluded areas
 *
 * @description
 * This hook attaches a click event listener to detect clicks outside a specified element.
 * It supports excluding specific elements from triggering the outside click handler.
 * The event handler is memoized for optimal performance.
 *
 * @example
 * ```tsx
 * function Dropdown() {
 *   const dropdownRef = useRef<HTMLDivElement>(null);
 *   const buttonRef = useRef<HTMLButtonElement>(null);
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   useClickOutside(
 *     dropdownRef,
 *     () => setIsOpen(false),
 *     [buttonRef]
 *   );
 *
 *   return (
 *     <>
 *       <button ref={buttonRef} onClick={() => setIsOpen(true)}>
 *         Open Menu
 *       </button>
 *       {isOpen && (
 *         <div ref={dropdownRef}>
 *           Dropdown content
 *         </div>
 *       )}
 *     </>
 *   );
 * }
 * ```
 *
 * @param ref - Reference to the element to detect clicks outside of
 * @param onClickOutside - Callback to be called when a click outside is detected
 * @param exclude - Optional array of refs to elements that should not trigger the outside click
 */
export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  onClickOutside: VoidFunction,
  exclude?: React.RefObject<HTMLElement>[],
): void {
  // Memoize the click handler to prevent unnecessary recreations
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (!ref.current) return;

      // Check if click event happened outside the `ref`
      if (!ref.current.contains(event.target as Node)) {
        // Check if some `exclude`d node outside the `ref` node has been clicked
        const isExcludedNodeClicked = exclude?.some((node) => node.current?.contains(event.target as Node));

        // Fire callback if click happened outside both `ref` and `exclude`d nodes
        if (!isExcludedNodeClicked) {
          onClickOutside();
        }
      }
    },
    [ref, onClickOutside, exclude],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]); // Only depends on the memoized handler
}
