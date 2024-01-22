export interface UseKeyboardShortcutsConfigType {
    [keybinding: string]: (event: KeyboardEvent) => void;
}
export type UseKeyboardShortcutsOptionsType = {
    enabled?: boolean;
};
export declare function useKeyboardShortcuts(config: UseKeyboardShortcutsConfigType, options?: UseKeyboardShortcutsOptionsType): void;
