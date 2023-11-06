export declare enum UseExpandableListState {
    contracted = "contracted",
    expanded = "expanded"
}
export type UseExpandableListConfigType = {
    max: number;
    length: number;
};
export type UseExpandableListReturnType = {
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
