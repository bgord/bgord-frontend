import { useCallback, useMemo } from "react";

/**
 * Hook for handling Meta+Enter form submission in text areas.
 * Provides a keyboard shortcut to submit forms when Meta (Command on Mac, Ctrl on Windows)
 * and Enter keys are pressed together.
 *
 * @returns Object containing onKeyDown handler to be attached to a textarea
 *
 * @example
 * ```tsx
 * // Basic usage
 * function MyForm() {
 *   const { onKeyDown } = useMetaEnterSubmit();
 *   return (
 *     <form>
 *       <textarea
 *         onKeyDown={onKeyDown}
 *         placeholder="Press Meta+Enter to submit"
 *       />
 *     </form>
 *   );
 * }
 *
 * // With additional handlers
 * function MyFormWithHandlers() {
 *   const { onKeyDown } = useMetaEnterSubmit();
 *   const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
 *     onKeyDown(event);
 *     // Your additional keyboard handling logic
 *   };
 *   return (
 *     <form>
 *       <textarea onKeyDown={handleKeyDown} />
 *     </form>
 *   );
 * }
 * ```
 */
export function useMetaEnterSubmit() {
  // Memoize the event handler to prevent unnecessary re-renders
  const handleMetaEnterSubmit = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key !== "Enter" || !event.metaKey) return;

      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    },
    [],
  );

  // Memoize the return value to maintain reference equality
  return useMemo(
    () => ({ onKeyDown: handleMetaEnterSubmit }),
    [handleMetaEnterSubmit],
  );
}
