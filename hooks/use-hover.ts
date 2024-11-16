import { useEffect, useRef } from "react";

import { UseToggleReturnType, useToggle } from "./use-toggle";

export type UseHoverConfigType = {
  enabled: boolean;
};

export type UseHoverReturnType = {
  attach: { ref: React.RefObject<any> };
  isHovering: UseToggleReturnType["on"];
};

export function useHover(config?: UseHoverConfigType): UseHoverReturnType {
  const enabled = config?.enabled ?? true;

  const ref = useRef<any>(null);
  const isHovering = useToggle({ name: "is-hovering" });

  const handleMouseEnter = isHovering.enable;
  const handleMouseLeave = isHovering.disable;

  // biome-ignore lint: lint/complexity/noForEach
  useEffect(() => {
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
