export type UseToggleValueType = boolean;
export type UseToggleConfigType = UseToggleValueType;
export type UseToggleReturnType = {
    on: UseToggleValueType;
    off: UseToggleValueType;
    enable: VoidFunction;
    disable: VoidFunction;
    toggle: VoidFunction;
};
export declare function useToggle(defaultValue?: UseToggleConfigType): UseToggleReturnType;
export declare function extractUseToggle(props: UseToggleReturnType & Record<string, unknown>): {
    toggle: UseToggleReturnType;
    rest: Record<string, unknown>;
};
