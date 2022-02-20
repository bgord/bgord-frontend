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
