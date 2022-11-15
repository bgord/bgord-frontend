import { useState, useEffect } from "react";

export function useCurrentTimestamp() {
  const [timestamp, setTimestamp] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => setTimestamp(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return timestamp;
}
