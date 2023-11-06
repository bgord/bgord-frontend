export type ImagePathType = string | undefined;
export type ImageResolutionType = {
    width: number | null;
    height: number | null;
};
export declare const emptyImageResolution: ImageResolutionType;
export declare function getImageResolution(path: ImagePathType): Promise<ImageResolutionType>;
