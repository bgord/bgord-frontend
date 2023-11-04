import React from "react";
import { UseToggleReturnType } from "./use-toggle";
export declare type UseHoverConfigType = {
    enabled: boolean;
};
export declare type UseHoverReturnType = {
    attach: {
        ref: React.RefObject<any>;
    };
    isHovering: UseToggleReturnType["on"];
};
export declare function useHover(config?: UseHoverConfigType): UseHoverReturnType;
