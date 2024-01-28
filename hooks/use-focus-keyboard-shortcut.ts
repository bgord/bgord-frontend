import { useRef, Ref } from "react";

import { useKeyboardShortcuts } from "./use-keyboard-shortcuts";

export function useFocusKeyboardShortcut(
  shortcut: string
): Ref<HTMLInputElement> {
  const ref = useRef<HTMLInputElement>(null);
  useKeyboardShortcuts({ [shortcut]: () => ref.current?.focus() });

  return ref;
}
