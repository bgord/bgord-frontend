import type { TimestampType } from "@bgord/node/dist/schema";
import { useEffect, useState } from "react";
import { Time } from "../time";

export function getCurrentTimestamp(): TimestampType {
  return Date.now();
}

export function useCurrentTimestamp(): TimestampType {
  const [timestamp, setTimestamp] = useState<TimestampType>(getCurrentTimestamp);

  useEffect(() => {
    const timer = setInterval(() => setTimestamp(getCurrentTimestamp()), Time.Seconds(1).ms);

    return () => clearInterval(timer);
  }, []);

  return timestamp;
}
