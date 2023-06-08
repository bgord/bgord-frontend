import { useState, useEffect } from "react";
import { Time } from "../time";

export type CurrentTimestampType = number;

export function getCurrentTimestamp(): CurrentTimestampType {
  return Date.now();
}

export function useCurrentTimestamp(): CurrentTimestampType {
  const [timestamp, setTimestamp] =
    useState<CurrentTimestampType>(getCurrentTimestamp);

  useEffect(() => {
    const timer = setInterval(
      () => setTimestamp(getCurrentTimestamp()),
      Time.Seconds(1).toMs()
    );

    return () => clearInterval(timer);
  }, []);

  return timestamp;
}
