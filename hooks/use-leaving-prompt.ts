import { useCallback, useEffect } from "react";

/**
 * Hook to prompt user when trying to leave page with unsaved changes
 *
 * @example
 * ```tsx
 * function Form() {
 *   const [isDirty, setIsDirty] = useState(false);
 *   useLeavingPrompt(isDirty);
 *
 *   return <form>...</form>;
 * }
 * ```
 */
export function useLeavingPrompt(condition = false): void {
  const handler = useCallback((e: BeforeUnloadEvent) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    if (!condition) return;

    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [condition, handler]);
}
