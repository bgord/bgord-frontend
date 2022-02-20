export declare function useToggle(defaultValue?: boolean): {
    on: boolean;
    off: boolean;
    enable: () => void;
    disable: () => void;
    toggle: () => void;
};
export declare type WindowDimensions = {
    width: number | undefined;
    height: number | undefined;
};
export declare function useWindowDimensions(): WindowDimensions;
