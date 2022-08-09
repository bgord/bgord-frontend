import React from "react";

export type UseAutofocusConfigType = {
  ref: React.RefObject<HTMLElement>;
  condition: boolean;
};

export function useAutofocus(config: UseAutofocusConfigType) {
  React.useEffect(() => {
    if (!config.condition) return;

    config.ref.current?.focus();
  }, [config.condition]);
}
