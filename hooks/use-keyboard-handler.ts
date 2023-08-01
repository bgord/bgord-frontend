import React from "react";

export enum KeyNameEnum {
  Enter = "Enter",
  Space = " ",
}

export type UseKeyHandlerConfigType = Partial<Record<KeyNameEnum, Function>>;

export type UseKeyHandlerReturnType = (
  event: React.KeyboardEvent<HTMLElement>
) => void;

export function useKeyHandler(
  config: UseKeyHandlerConfigType
): UseKeyHandlerReturnType {
  const keys = Object.keys(config);

  return function handleKey(event: React.KeyboardEvent<HTMLElement>) {
    const key = event.key as KeyNameEnum;
    const executor = config[key];

    if (keys.includes(event.key) && config[key] && executor) {
      executor();
    }
  };
}
