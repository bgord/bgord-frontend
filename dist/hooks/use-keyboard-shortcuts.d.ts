export interface KeyBindingMap {
    [keybinding: string]: (event: KeyboardEvent) => void;
}
export declare function useKeyboardShortcurts(config: KeyBindingMap): void;
