export type UseToggleValueType = boolean;
export type UseToggleConfigType = UseToggleValueType;
export type UseToggleReturnType = {
    on: UseToggleValueType;
    off: UseToggleValueType;
    enable: VoidFunction;
    disable: VoidFunction;
    toggle: VoidFunction;
    props: {
        controller: {
            "aria-expanded": string;
            "aria-controls": string | undefined;
        };
        target: {
            id: string | undefined;
        };
    };
};
export declare function useToggle(defaultValue?: UseToggleConfigType, name?: string): UseToggleReturnType;
export declare function extractUseToggle<X>(_props: UseToggleReturnType & X): {
    toggle: UseToggleReturnType;
    rest: X;
};
