import React from "react";
import { useToggle } from "./use-toggle";

type OnlineStatusType = boolean;

export const useIsOnline = (): OnlineStatusType => {
  const onlineStatus = useToggle(getOnlineStatus());

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  React.useEffect(() => {
    function handleOnline() {
      onlineStatus.enable();
    }

    function handleOffline() {
      onlineStatus.disable();
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return onlineStatus.on;
};

// Check if browser supports `navigator.onLine`,
// otherwise, we assume the user is online.
function getOnlineStatus(): OnlineStatusType {
  return typeof navigator !== "undefined" &&
    typeof navigator.onLine === "boolean"
    ? navigator.onLine
    : true;
}
