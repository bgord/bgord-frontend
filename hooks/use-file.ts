import { useState } from "react";

type UseFileNameType = string;

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
    selectFile(event: React.ChangeEvent<HTMLInputElement>): File | undefined;
    clearFile: VoidFunction;
  };
  label: { props: { htmlFor: UseFileNameType } };
  input: { props: { id: UseFileNameType; name: UseFileNameType } };
};

type UseFileSelected = {
  state: UseFileState.selected;
  data: File;
  actions: {
    selectFile(event: React.ChangeEvent<HTMLInputElement>): File | undefined;
    clearFile: VoidFunction;
    previewFile: () => ReturnType<typeof URL.createObjectURL> | undefined;
  };
  label: { props: { htmlFor: UseFileNameType } };
  input: { props: { id: UseFileNameType; name: UseFileNameType } };
};

type UseFileError = {
  state: UseFileState.error;
  data: null;
  actions: {
    selectFile(event: React.ChangeEvent<HTMLInputElement>): File | undefined;
    clearFile: VoidFunction;
  };
  label: { props: { htmlFor: UseFileNameType } };
  input: { props: { id: UseFileNameType; name: UseFileNameType } };
};

export type UseFileReturnType = UseFileIdle | UseFileSelected | UseFileError;

export function useFile(
  name: UseFileNameType,
  config?: UseFileConfigType
): UseFileReturnType {
  const maxSize = config?.maxSize ?? Infinity;

  const [state, setState] = useState<UseFileState>(UseFileState.idle);

  const [file, setFile] = useState<File | null>(null);

  function selectFile(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.currentTarget.files;

    if (!files || !files[0]) return;

    const file = files[0];

    if (file.size > maxSize) {
      setState(UseFileState.error);
      return undefined;
    }

    setFile(file);
    setState(UseFileState.selected);

    return file;
  }

  function clearFile() {
    setFile(null);
    setState(UseFileState.idle);
  }

  function previewFile() {
    if (!file) return undefined;
    return URL.createObjectURL(file);
  }

  if (state === UseFileState.idle) {
    return {
      state,
      data: null,
      actions: { selectFile, clearFile },
      label: { props: { htmlFor: name } },
      input: { props: { id: name, name: name } },
    };
  }

  if (state === UseFileState.selected) {
    return {
      state,
      data: file as File,
      actions: { selectFile, clearFile, previewFile },
      label: { props: { htmlFor: name } },
      input: { props: { id: name, name: name } },
    };
  }

  return {
    state,
    data: null,
    actions: { selectFile, clearFile },
    label: { props: { htmlFor: name } },
    input: { props: { id: name, name: name } },
  };
}
