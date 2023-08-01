import React from "react";
export declare enum KeyNameEnum {
    Enter = "Enter",
    Space = " "
}
export declare type UseKeyHandlerConfigType = Partial<Record<KeyNameEnum, Function>>;
export declare type UseKeyHandlerReturnType = (event: React.KeyboardEvent<HTMLElement>) => void;
export declare function useKeyHandler(config: UseKeyHandlerConfigType): UseKeyHandlerReturnType;
