import { useCallback, useEffect, useRef } from "react";
import { Navigation } from "react-router-dom";
import { UseToggleReturnType, useToggle } from "./use-toggle";

/**
 * Hook that provides a delayed loader state for navigation transitions
 *
 * @description
 * This hook manages a delayed loading state that activates only after a specified delay
 * has elapsed during navigation transitions. This helps prevent flash of loading states
 * for quick navigation changes.
 *
 * @example
 * ```tsx
 * function LoadingIndicator() {
 *   const navigation = useNavigation();
 *   const delayedLoader = useDelayedLoader(navigation, 300);
 *
 *   if (!delayedLoader.on) return null;
 *
 *   return <Spinner />;
 * }
 * ```
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const navigation = useNavigation();
 *   const loader = useDelayedLoader(navigation);
 *
 *   return (
 *     <div>
 *       {loader.on && <LoadingOverlay />}
 *       <Content style={{ opacity: loader.on ? 0.5 : 1 }} />
 *     </div>
 *   );
 * }
 * ```
 *
 * @param navigation - Navigation object from react-router-dom
 * @param delayMs - Delay in milliseconds before showing loader (default: 500ms)
 * @returns Toggle state for the delayed loader
 */
export function useDelayedLoader(navigation: Navigation, delayMs = 500): UseToggleReturnType {
  // Create refs for toggle instances to maintain stable references
  const delayedLoader = useToggle({ name: "delayed-loader" });
  const delayElapsed = useToggle({ name: "delayed-elapsed" });

  // Use ref for timeout ID to persist between renders
  const timeoutIdRef = useRef<NodeJS.Timeout>();

  // Memoize the delay elapsed callback
  const handleDelayElapsed = useCallback(() => {
    delayElapsed.enable();
  }, [delayElapsed]);

  // Effect for managing the delay timeout
  useEffect(() => {
    timeoutIdRef.current = setTimeout(handleDelayElapsed, delayMs);

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [delayMs, handleDelayElapsed]);

  // Memoize the loader state update callback
  const updateLoaderState = useCallback(() => {
    if (delayElapsed.off) return;
    if (navigation.state === "loading") {
      delayedLoader.enable();
    } else {
      delayedLoader.disable();
    }
  }, [delayElapsed.off, navigation.state, delayedLoader]);

  // Effect for managing loader state based on navigation
  useEffect(() => {
    updateLoaderState();
  }, [updateLoaderState]);

  return delayedLoader;
}
