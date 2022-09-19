import * as React from "react";

import { useField } from "./use-field";
import { useFile, UseFileReturnType, UseFileState } from "./use-file";
import {
  getImageResolution,
  ImageResolutionType,
  emptyImageResolution,
} from "../get-image-resolution";

export function useImageFileResolution(
  file: UseFileReturnType
): ImageResolutionType {
  const resolution = useField<ImageResolutionType>(emptyImageResolution);

  React.useEffect(() => {
    async function execute() {
      if (file.state === UseFileState.selected) {
        try {
          const result = await getImageResolution(file.actions.previewFile());

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
  }, [file.state]);

  return resolution.value;
}
