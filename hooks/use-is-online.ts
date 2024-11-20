import { useCallback, useEffect, useMemo } from "react";
import { useToggle } from "./use-toggle";

type OnlineStatusType = boolean;

/**
 * Safely checks browser's online status
 */
function getOnlineStatus(): OnlineStatusType {
  return typeof navigator !== "undefined" && typeof navigator.onLine === "boolean" ? navigator.onLine : true;
}

/**
 * Hook that tracks browser's online/offline status
 *
 * @example
 * ```tsx
 * function NetworkStatus() {
 *   const isOnline = useIsOnline();
 *
 *   return (
 *     <div>
 *       Status: {isOnline ? 'Online' : 'Offline'}
 *     </div>
 *   );
 * }
 * ```
 */
export const useIsOnline = (): OnlineStatusType => {
  const initialStatus = useMemo(() => getOnlineStatus(), []);

  const onlineStatus = useToggle({
    name: "online-status",
    defaultValue: initialStatus,
  });

  const handleOnline = useCallback(() => {
    onlineStatus.enable();
  }, [onlineStatus]);

  const handleOffline = useCallback(() => {
    onlineStatus.disable();
  }, [onlineStatus]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [handleOnline, handleOffline]);

  return onlineStatus.on;
};
