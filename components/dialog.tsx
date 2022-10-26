import React from "react";

import * as hooks from "../hooks";

export type DialogPropsType = hooks.UseToggleReturnType &
  JSX.IntrinsicElements["dialog"];

export function Dialog(props: DialogPropsType) {
  const { disable, enable, on, off, toggle, ...rest } = props;
  const ref = React.useRef<HTMLDialogElement>(null);

  hooks.useKeyboardShortcurts({ Escape: disable });
  hooks.useClickOutside(ref, disable);
  hooks.useAutofocus({ ref, condition: props.on });
  hooks.useScrollLock(props.on);

  if (props.off) return null;

  return (
    <dialog
      ref={ref}
      tabIndex={0}
      open={props.on}
      data-display="flex"
      data-direction="column"
      data-position="absolute"
      data-z="2"
      data-bg="white"
      data-br="4"
      data-bc="gray-300"
      data-bw="1"
      data-p="24"
      data-mx="auto"
      {...rest}
    />
  );
}
