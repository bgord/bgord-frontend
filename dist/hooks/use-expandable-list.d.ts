export declare enum UseExpandableListState {
    contracted = "contracted",
    expanded = "expanded"
}
export declare type UseExpandableListConfigType = {
    max: number;
    length: number;
};
export declare type UseExpandableListReturnType = {
    state: UseExpandableListState;
    displayShowMore: boolean;
    displayShowLess: boolean;
    actions: {
        showMore: VoidFunction;
        showLess: VoidFunction;
    };
    numberOfExcessiveElements: number;
    filterFn: (element: unknown, index: number) => void;
};
export declare function useExpandableList(config: UseExpandableListConfigType): UseExpandableListReturnType;
