import { useState } from "react";

export type UseFileConfigType = {
  maxSize?: number;
};

export enum UseFileState {
  "idle" = "idle",
  "selected" = "selected",
  "error" = "error",
}

type UseFileIdle = {
  state: UseFileState.idle;
  data: null;
  actions: {
    selectFile(event: React.ChangeEvent<HTMLInputElement>): void;
    clearFile: VoidFunction;
  };
};

type UseFileSelected = {
  state: UseFileState.selected;
  data: File;
  actions: {
    selectFile(event: React.ChangeEvent<HTMLInputElement>): void;
    clearFile: VoidFunction;
    previewFile: () => ReturnType<typeof URL.createObjectURL> | null;
  };
};

type UseFileError = {
  state: UseFileState.error;
  data: null;
  actions: {
    selectFile(event: React.ChangeEvent<HTMLInputElement>): void;
    clearFile: VoidFunction;
  };
};

export function useFile(
  config?: UseFileConfigType
): UseFileIdle | UseFileSelected | UseFileError {
  const maxSize = config?.maxSize ?? Infinity;

  const [state, setState] = useState<UseFileState>(UseFileState.idle);

  const [file, setFile] = useState<File | null>(null);

  function selectFile(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.currentTarget.files;

    if (!files || !files[0]) return;

    const file = files[0];

    if (file.size > maxSize) return setState(UseFileState.error);

    setFile(file);
    setState(UseFileState.selected);
  }

  function clearFile() {
    setFile(null);
    setState(UseFileState.idle);
  }

  function previewFile() {
    if (!file) return null;
    return URL.createObjectURL(file);
  }

  if (state === UseFileState.idle) {
    return { state, data: null, actions: { selectFile, clearFile } };
  }

  if (state === UseFileState.selected) {
    return {
      state,
      data: file as File,
      actions: { selectFile, clearFile, previewFile },
    };
  }

  return { state, data: null, actions: { selectFile, clearFile } };
}
