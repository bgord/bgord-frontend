import React from "react";
import * as hooks from "../hooks";

export function OfflineIndicator(props: { children: React.ReactNode }) {
  const isOnline = hooks.verified.useIsOnline();

  if (isOnline) return null;

  return <>{props.children}</>;
}
