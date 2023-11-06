import React from "react";
export declare enum KeyNameEnum {
    Enter = "Enter",
    Space = " "
}
export type UseKeyHandlerConfigType = Partial<Record<KeyNameEnum, Function>>;
export type UseKeyHandlerReturnType = (event: React.KeyboardEvent<HTMLElement>) => void;
export declare function useKeyHandler(config: UseKeyHandlerConfigType): UseKeyHandlerReturnType;
