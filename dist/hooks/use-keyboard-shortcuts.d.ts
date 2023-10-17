export interface UseKeyboardShortcutsConfigType {
    [keybinding: string]: (event: KeyboardEvent) => void;
}
export declare function useKeyboardShortcuts(config: UseKeyboardShortcutsConfigType): void;
