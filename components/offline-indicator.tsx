import React from "react";
import { useIsOnline } from "../hooks";

export function OfflineIndicator(props: { children: React.ReactChild }) {
  const isOnline = useIsOnline();

  if (isOnline) return null;

  return <>{props.children}</>;
}
