import { useEffect, useMemo, useState } from "react";

type UseFileNameType = string;

export type UseFileConfigType = {
  maxSize?: number;
};

export enum UseFileState {
  idle = "idle",
  selected = "selected",
  error = "error",
}

type UseFileIdle = {
  state: UseFileState.idle;
  matches: (states: UseFileState[]) => boolean;
  isIdle: true;
  isSelected: false;
  isError: false;
  data: null;
  actions: {
    selectFile(event: React.ChangeEvent<HTMLInputElement>): File | undefined;
    clearFile: VoidFunction;
  };
  label: { props: { htmlFor: UseFileNameType } };
  input: {
    key: React.Key;
    props: {
      id: UseFileNameType;
      name: UseFileNameType;
      multiple: false;
    };
  };
};

type UseFileSelected = {
  state: UseFileState.selected;
  matches: (states: UseFileState[]) => boolean;
  data: File;
  isIdle: false;
  isSelected: true;
  isError: false;
  actions: {
    selectFile(event: React.ChangeEvent<HTMLInputElement>): File | undefined;
    clearFile: VoidFunction;
  };
  preview: ReturnType<typeof URL.createObjectURL> | undefined;
  label: { props: { htmlFor: UseFileNameType } };
  input: {
    key: React.Key;
    props: {
      id: UseFileNameType;
      name: UseFileNameType;
      multiple: false;
    };
  };
};

type UseFileError = {
  state: UseFileState.error;
  matches: (states: UseFileState[]) => boolean;
  data: null;
  isIdle: false;
  isSelected: false;
  isError: true;
  actions: {
    selectFile(event: React.ChangeEvent<HTMLInputElement>): File | undefined;
    clearFile: VoidFunction;
  };
  label: { props: { htmlFor: UseFileNameType } };
  input: {
    props: {
      key: React.Key;
      id: UseFileNameType;
      name: UseFileNameType;
      multiple: false;
    };
  };
};

export type UseFileReturnType = UseFileIdle | UseFileSelected | UseFileError;

export function useFile(
  name: UseFileNameType,
  config?: UseFileConfigType
): UseFileReturnType {
  const maxSize = config?.maxSize ?? Number.POSITIVE_INFINITY;

  const [key, setKey] = useState(0);
  const [state, setState] = useState<UseFileState>(UseFileState.idle);
  const [file, setFile] = useState<File | null>(null);

  function selectFile(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.currentTarget.files;

    if (!files?.[0]) return;

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
    setKey((key) => key + 1);
    setFile(null);
    setState(UseFileState.idle);
  }

  const preview = useMemo(
    () => (file ? URL.createObjectURL(file) : undefined),
    [file]
  );

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  function matches(states: UseFileState[]) {
    return states.some((given) => given === state);
  }

  if (state === UseFileState.idle) {
    return {
      state,
      matches,
      isIdle: true,
      isSelected: false,
      isError: false,
      data: null,
      actions: { selectFile, clearFile },
      label: { props: { htmlFor: name } },
      input: {
        key,
        props: { id: name, name, multiple: false },
      },
    };
  }

  if (state === UseFileState.selected) {
    return {
      state,
      matches,
      data: file as File,
      isIdle: false,
      isSelected: true,
      isError: false,
      actions: { selectFile, clearFile },
      preview,
      label: { props: { htmlFor: name } },
      input: {
        key,
        props: { id: name, name, multiple: false },
      },
    };
  }

  return {
    state,
    matches,
    data: null,
    isIdle: false,
    isSelected: false,
    isError: true,
    actions: { selectFile, clearFile },
    label: { props: { htmlFor: name } },
    input: {
      props: { id: name, name, multiple: false, key },
    },
  };
}
