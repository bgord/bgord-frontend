import React from "react";

import * as hooks from "../hooks";

export type DialogPropsType = hooks.UseToggleReturnType &
  JSX.IntrinsicElements["dialog"];

export function Dialog(props: DialogPropsType) {
  const { toggle: dialog, rest } = hooks.extractUseToggle(props);
  const ref = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (props.on) {
      // @ts-ignore
      ref.current?.showModal();
    } else {
      // @ts-ignore
      ref.current?.close();
    }
  }, [props.on]);

  hooks.useKeyboardShortcuts({ Escape: dialog.disable });
  hooks.useAutofocus({ ref, condition: props.on });
  hooks.useScrollLock(props.on);
  hooks.useClickOutside(ref, dialog.disable);

  return (
    <dialog
      ref={ref}
      tabIndex={0}
      aria-modal="true"
      data-display={props.on ? "flex" : "none"}
      data-direction="column"
      data-mx="auto"
      data-p="24"
      data-position="fixed"
      data-z="2"
      data-bg="white"
      data-br="4"
      data-bc="gray-300"
      data-bw="1"
      data-backdrop="black"
      {...rest}
    />
  );
}
