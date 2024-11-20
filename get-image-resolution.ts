/**
 * Image resolution utilities
 */

type ImagePathType = string | undefined;

export type ImageResolutionType = {
  width: number | null;
  height: number | null;
};

export const emptyImageResolution: ImageResolutionType = {
  width: null,
  height: null,
};

/**
 * Gets width/height of an image from its path
 * @param path - URL/path to image
 * @returns Promise resolving to image dimensions
 * @throws If image fails to load
 */
export async function getImageResolution(
  path: ImagePathType,
): Promise<ImageResolutionType> {
  if (!path) return emptyImageResolution;

  const img = document.createElement("img");

  const promise = new Promise<ImageResolutionType>((resolve, reject) => {
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
  });

  img.src = path;

  return promise;
}
