import React from "react";

import { useToggle, UseToggleReturnType } from "./use-toggle";

export type UseHoverConfigType = {
  enabled: boolean;
};

export type UseHoverReturnType = {
  attach: { ref: React.RefObject<any> };
  isHovering: UseToggleReturnType["on"];
};

export function useHover(config?: UseHoverConfigType): UseHoverReturnType {
  const enabled = config?.enabled ?? true;

  const ref = React.useRef<any>(null);
  const isHovering = useToggle(false);

  const handleMouseEnter = isHovering.enable;
  const handleMouseLeave = isHovering.disable;

  // biome-ignore lint: lint/complexity/noForEach
  React.useEffect(() => {
    const node = ref.current;

    if (node && enabled) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (node && enabled) {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return { attach: { ref }, isHovering: isHovering.on && enabled };
}
