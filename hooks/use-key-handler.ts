import { useCallback, useMemo } from "react";

/**
 * Supported keyboard keys
 */
export enum KeyNameEnum {
  Enter = "Enter",
  Space = " ",
}

/**
 * Type for key handler functions
 */
type KeyHandler = () => void;

/**
 * Type for keyboard events
 */
type KeyHandlerEvent = React.KeyboardEvent<HTMLElement>;

/**
 * Configuration type for key handlers
 */
type UseKeyHandlerConfigType = Partial<Record<KeyNameEnum, KeyHandler>>;

/**
 * Return type for useKeyHandler hook
 */
type UseKeyHandlerReturn = (event: KeyHandlerEvent) => void;

/**
 * Hook for handling keyboard events with predefined handlers
 *
 * @param config - Map of key names to their handler functions
 * @returns Event handler function for keydown events
 *
 * @example
 * ```tsx
 * // Basic usage
 * const handleKey = useKeyHandler({
 *   [KeyNameEnum.Enter]: () => console.log('Enter pressed'),
 *   [KeyNameEnum.Space]: () => console.log('Space pressed'),
 * });
 *
 * return <button onKeyDown={handleKey}>Press Enter or Space</button>;
 *
 * // With multiple handlers
 * const handleKey = useKeyHandler({
 *   [KeyNameEnum.Enter]: handleEnter,
 *   [KeyNameEnum.Space]: handleSpace,
 * });
 *
 * // With conditional handlers
 * const handleKey = useKeyHandler({
 *   ...(isEnabled && { [KeyNameEnum.Enter]: handleEnter }),
 * });
 * ```
 */
export function useKeyHandler(config: UseKeyHandlerConfigType): UseKeyHandlerReturn {
  // Memoize keys array for performance
  const keys = useMemo(() => Object.keys(config), [config]);

  // Memoize handler function to prevent unnecessary recreations
  const handleKey = useCallback(
    (event: KeyHandlerEvent) => {
      const key = event.key as KeyNameEnum;
      const executor = config[key];

      if (keys.includes(event.key) && executor) {
        executor();
      }
    },
    [config, keys],
  );

  return handleKey;
}
