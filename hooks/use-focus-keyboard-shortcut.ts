import { useRef, Ref } from "react";
import { useKeyboardShortcuts } from "./use-keyboard-shortcuts";

type FocusableElement = HTMLElement & { focus(): void };

export function useFocusKeyboardShortcut<
  T extends FocusableElement = HTMLInputElement,
>(shortcut: string): { ref: Ref<T> } {
  const ref = useRef<T>(null);

  useKeyboardShortcuts({
    [shortcut]: () => ref.current?.focus(),
  });

  return { ref };
}
