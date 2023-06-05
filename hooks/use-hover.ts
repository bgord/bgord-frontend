import React from "react";

import { useToggle, UseToggleReturnType } from "./use-toggle";

export type UseHoverReturnType = {
  attach: { ref: React.RefObject<any> };
  isHovering: UseToggleReturnType["on"];
};

export function useHover(): UseHoverReturnType {
  const ref = React.useRef<any>(null);
  const isHovering = useToggle(false);

  const handleMouseEnter = isHovering.enable;
  const handleMouseLeave = isHovering.disable;

  React.useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return { attach: { ref }, isHovering: isHovering.on };
}
