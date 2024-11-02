import { useEffect } from "react";

import { useField } from "./use-field";
import { UseFileReturnType, UseFileState } from "./use-file";
import {
  getImageResolution,
  ImageResolutionType,
  emptyImageResolution,
} from "../get-image-resolution";

export function useImageFileResolution(
  file: UseFileReturnType
): ImageResolutionType {
  const resolution = useField<ImageResolutionType>(
    "resolution",
    emptyImageResolution
  );

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useEffect(() => {
    async function execute() {
      if (file.state === UseFileState.selected) {
        try {
          const result = await getImageResolution(file.preview);

          return resolution.set(result);
        } catch (error) {
          return resolution.clear();
        }
      }

      if (
        [UseFileState.error, UseFileState.idle].includes(file.state) &&
        resolution.value.width !== null &&
        resolution.value.height !== null
      ) {
        resolution.clear();
      }
    }

    execute();
  }, [file.state, file.data?.name]);

  return resolution.value;
}
