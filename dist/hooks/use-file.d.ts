/// <reference types="react" />
declare type UseFileNameType = string;
export declare type UseFileConfigType = {
    maxSize?: number;
};
export declare enum UseFileState {
    "idle" = "idle",
    "selected" = "selected",
    "error" = "error"
}
declare type UseFileIdle = {
    state: UseFileState.idle;
    matches: (states: UseFileState[]) => boolean;
    isIdle: true;
    isSelected: false;
    isError: false;
    data: null;
    actions: {
        selectFile(event: React.ChangeEvent<HTMLInputElement>): File | undefined;
        clearFile: VoidFunction;
    };
    label: {
        props: {
            htmlFor: UseFileNameType;
        };
    };
    input: {
        props: {
            id: UseFileNameType;
            name: UseFileNameType;
        };
    };
};
declare type UseFileSelected = {
    state: UseFileState.selected;
    matches: (states: UseFileState[]) => boolean;
    data: File;
    isIdle: false;
    isSelected: true;
    isError: false;
    actions: {
        selectFile(event: React.ChangeEvent<HTMLInputElement>): File | undefined;
        clearFile: VoidFunction;
    };
    preview: ReturnType<typeof URL.createObjectURL> | undefined;
    label: {
        props: {
            htmlFor: UseFileNameType;
        };
    };
    input: {
        props: {
            id: UseFileNameType;
            name: UseFileNameType;
        };
    };
};
declare type UseFileError = {
    state: UseFileState.error;
    matches: (states: UseFileState[]) => boolean;
    data: null;
    isIdle: false;
    isSelected: false;
    isError: true;
    actions: {
        selectFile(event: React.ChangeEvent<HTMLInputElement>): File | undefined;
        clearFile: VoidFunction;
    };
    label: {
        props: {
            htmlFor: UseFileNameType;
        };
    };
    input: {
        props: {
            id: UseFileNameType;
            name: UseFileNameType;
        };
    };
};
export declare type UseFileReturnType = UseFileIdle | UseFileSelected | UseFileError;
export declare function useFile(name: UseFileNameType, config?: UseFileConfigType): UseFileReturnType;
export {};
