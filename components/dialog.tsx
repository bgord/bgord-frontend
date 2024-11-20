/**
 * Modal dialog component with keyboard/click handling and accessibility
 */
import { useEffect, useRef } from "react";

import * as hooks from "../hooks";

export type DialogPropsType = hooks.UseToggleReturnType &
  JSX.IntrinsicElements["dialog"];

/**
 * @param props Combined toggle and dialog props
 */
export function Dialog(props: DialogPropsType) {
  const { toggle: dialog, rest } = hooks.verified.extractUseToggle(props);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (props.on) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [props.on]);

  hooks.verified.useKeyboardShortcuts({ Escape: dialog.disable });
  hooks.verified.useAutofocus({ ref, condition: props.on });
  hooks.verified.useScrollLock({ condition: props.on });
  hooks.verified.useClickOutside(ref, dialog.disable);

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
