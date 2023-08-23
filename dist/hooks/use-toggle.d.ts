export declare type UseToggleValueType = boolean;
export declare type UseToggleConfigType = UseToggleValueType;
export declare type UseToggleReturnType = {
    on: UseToggleValueType;
    off: UseToggleValueType;
    enable: VoidFunction;
    disable: VoidFunction;
    toggle: VoidFunction;
};
export declare function useToggle(defaultValue?: UseToggleConfigType): UseToggleReturnType;
