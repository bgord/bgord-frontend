export interface UseKeyboardShortcurtsConfigType {
    [keybinding: string]: (event: KeyboardEvent) => void;
}
export declare function useKeyboardShortcurts(config: UseKeyboardShortcurtsConfigType): void;
