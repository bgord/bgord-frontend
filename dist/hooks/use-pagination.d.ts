import { PagedMetaType } from "../pagination";
export declare function usePagination(): {
    current: number;
    last: number | undefined;
    buttons: {
        firstPage: {
            value: number;
            exists: boolean;
            active: boolean;
            go: () => void;
        };
        previousPage: {
            value: number | undefined;
            exists: number | undefined;
            disabled: boolean;
            go: () => void;
        };
        nextPage: {
            value: number | undefined;
            exists: number | undefined;
            disabled: boolean;
            go: () => void;
        };
        lastPage: {
            value: number | undefined;
            exists: boolean;
            active: boolean;
            disabled: boolean;
            go: () => void;
        };
    };
    update: (updated: PagedMetaType | null) => void;
};
