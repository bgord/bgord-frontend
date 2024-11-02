export type ImagePathType = string | undefined;

export type ImageResolutionType = {
  width: number | null;
  height: number | null;
};

export const emptyImageResolution: ImageResolutionType = {
  width: null,
  height: null,
};

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
