/// <reference types="react" />
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
    data: null;
    actions: {
        selectFile(event: React.ChangeEvent<HTMLInputElement>): void;
        clearFile: VoidFunction;
    };
};
declare type UseFileSelected = {
    state: UseFileState.selected;
    data: File;
    actions: {
        selectFile(event: React.ChangeEvent<HTMLInputElement>): void;
        clearFile: VoidFunction;
        previewFile: () => ReturnType<typeof URL.createObjectURL> | undefined;
    };
};
declare type UseFileError = {
    state: UseFileState.error;
    data: null;
    actions: {
        selectFile(event: React.ChangeEvent<HTMLInputElement>): void;
        clearFile: VoidFunction;
    };
};
export declare function useFile(config?: UseFileConfigType): UseFileIdle | UseFileSelected | UseFileError;
export {};
