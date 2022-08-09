import React from "react";

import * as hooks from "../hooks";

export type DialogPropsType = hooks.UseToggleReturnType &
  JSX.IntrinsicElements["dialog"] & {
    DialogOverlay?: JSX.Element;
  };

export function Dialog(props: DialogPropsType) {
  const { DialogOverlay, disable, enable, on, off, toggle, ...rest } = props;
  const ref = React.useRef<HTMLDialogElement>(null);

  hooks.useKeyboardShortcurts({ Escape: disable });
  hooks.useClickOutside(ref, disable);
  hooks.useAutofocus({ ref, condition: props.on });
  hooks.useScrollLock(props.on)

  if (props.off) return null;

  return (
    <>
      {DialogOverlay ?? <DefaultDialogOverlay />}

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
    </>
  );
}

export function DefaultDialogOverlay(props: JSX.IntrinsicElements["div"]) {
  return (
    <div
      data-position="absolute"
      data-inset="0"
      data-display="flex"
      data-main="cross"
      data-cross="center"
      data-z="2"
      style={{ background: "rgb(0, 0, 0, 0.75)" }}
      {...props}
    />
  );
}
