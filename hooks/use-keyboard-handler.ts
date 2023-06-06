import React from "react";

export enum KeyNameEnum {
  Enter = "Enter",
  Space = " ",
}

export type UseKeyHandlerConfigType = Partial<
  Record<KeyNameEnum, VoidFunction>
>;

export function useKeyHandler(config: UseKeyHandlerConfigType) {
  const keys = Object.keys(config);

  function handleKey(event: React.KeyboardEvent<HTMLElement>) {
    const key = event.key as KeyNameEnum;
    const executor = config[key];

    if (keys.includes(event.key) && config[key] && executor) {
      executor();
    }
  }

  return handleKey;
}
