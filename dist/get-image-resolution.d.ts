declare type ImagePath = string | undefined;
export declare type ImageResolutionType = {
    width: number | null;
    height: number | null;
};
export declare function getImageResolution(path: ImagePath): Promise<ImageResolutionType>;
export {};
