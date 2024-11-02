import { useEffect } from "react";

export type UseAutofocusConfigType = {
  ref: React.RefObject<HTMLElement>;
  condition: boolean;
};

export function useAutofocus(config: UseAutofocusConfigType): void {
  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useEffect(() => {
    if (!config.condition) return;

    config.ref.current?.focus();
  }, [config.condition]);
}
