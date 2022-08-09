import React from "react";
export declare type UseAutofocusConfigType = {
    ref: React.RefObject<HTMLElement>;
    condition: boolean;
};
export declare function useAutofocus(config: UseAutofocusConfigType): void;
