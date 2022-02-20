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
export declare function useScrollLock(condition?: boolean): void;
export declare function usePreviousValue<T>(value: T): T | null;
export declare type UseExpandableListConfigType = {
    max: number;
    length: number;
};
export declare enum UseExpandableListState {
    contracted = "contracted",
    expanded = "expanded"
}
export declare function useExpandableList(config: UseExpandableListConfigType): {
    state: UseExpandableListState;
    displayShowMore: boolean;
    displayShowLess: boolean;
    showMore: () => void;
    showLess: () => void;
    numberOfExcessiveElements: number;
    filterFn: (_element: any, index: number) => boolean;
};
