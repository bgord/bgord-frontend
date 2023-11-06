import { PagedMetaType, PageType } from "../pagination";
type UsePaginationControlType = {
    active: boolean;
    disabled: boolean;
    exists: boolean;
    go: VoidFunction;
    value: PageType | undefined;
};
type UsePaginationReturnType = {
    current: PageType;
    last: PageType | undefined;
    controls: {
        firstPage: UsePaginationControlType;
        previousPage: UsePaginationControlType;
        nextPage: UsePaginationControlType;
        lastPage: UsePaginationControlType;
    };
    update: (updated: PagedMetaType | null) => void;
};
export declare function usePagination(): UsePaginationReturnType;
export {};
