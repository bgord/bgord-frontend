export declare type CopyToClipboardTextType = string;
declare type OnCopyToClipboardFailureType = (error?: unknown) => void;
declare type OnCopyToClipboardSuccessType = VoidFunction;
export declare type CopyToClipboardOptionsType = {
    text: string;
    onFailure?: OnCopyToClipboardFailureType;
    onSuccess?: OnCopyToClipboardSuccessType;
};
export declare function copyToClipboard(options: CopyToClipboardOptionsType): Promise<void>;
export {};
