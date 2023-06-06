import React from "react";
export declare enum KeyNameEnum {
    Enter = "Enter",
    Space = " "
}
export declare type UseKeyHandlerConfigType = Partial<Record<KeyNameEnum, VoidFunction>>;
export declare function useKeyHandler(config: UseKeyHandlerConfigType): (event: React.KeyboardEvent<HTMLElement>) => void;
