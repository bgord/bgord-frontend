export declare type UseToggleReturnType = {
    on: boolean;
    off: boolean;
    enable: VoidFunction;
    disable: VoidFunction;
    toggle: VoidFunction;
};
export declare function useToggle(defaultValue?: boolean): UseToggleReturnType;
