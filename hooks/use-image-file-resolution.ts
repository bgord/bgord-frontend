import { useEffect } from "react";

import { ImageResolutionType, emptyImageResolution, getImageResolution } from "../get-image-resolution";
import { UseFileReturnType, UseFileState } from "./use-file";
import { useField } from "./use-field";

export function useImageFileResolution(file: UseFileReturnType): ImageResolutionType {
  const width = useField<ImageResolutionType["width"]>({
    name: "width",
    defaultValue: emptyImageResolution.width,
  });

  const height = useField<ImageResolutionType["height"]>({
    name: "height",
    defaultValue: emptyImageResolution.height,
  });

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useEffect(() => {
    async function execute() {
      if (file.state === UseFileState.selected) {
        try {
          const result = await getImageResolution(file.preview);

          width.set(result.width);
          height.set(result.height);
          return;
        } catch (error) {
          width.clear();
          height.clear();
          return;
        }
      }

      if (
        [UseFileState.error, UseFileState.idle].includes(file.state) &&
        width.currentValue !== null &&
        width.currentValue !== null
      ) {
        width.clear();
        height.clear();
        return;
      }
    }

    execute();
  }, [file.state, file.data?.name]);

  return { width: width.value, height: height.value };
}
