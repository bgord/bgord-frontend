export type CopyToClipboardTextType = string;
type OnCopyToClipboardFailureType = (error?: unknown) => void;
type OnCopyToClipboardSuccessType = VoidFunction;
export type CopyToClipboardOptionsType = {
    text: string;
    onFailure?: OnCopyToClipboardFailureType;
    onSuccess?: OnCopyToClipboardSuccessType;
};
export declare function copyToClipboard(options: CopyToClipboardOptionsType): Promise<void>;
export {};
