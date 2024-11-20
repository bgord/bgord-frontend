import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * Type for file input name attribute
 */
type UseFileNameType = string;

/**
 * Configuration options for the file hook
 */
type UseFileConfigType = {
  maxSize?: number;
};

/**
 * Possible states for the file input
 */
export enum UseFileState {
  idle = "idle",
  selected = "selected",
  error = "error",
}

/**
 * Props for the idle state
 */
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

/**
 * Props for the selected state
 */
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

/**
 * Props for the error state
 */
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

/**
 * Hook for managing file input with state management and preview capabilities
 *
 * @description
 * This hook provides comprehensive file input management including state tracking,
 * file validation, preview generation, and proper cleanup.
 *
 * @example
 * ```tsx
 * function FileUploader() {
 *   const file = useFile("profile-image", { maxSize: 5 * 1024 * 1024 });
 *
 *   return (
 *     <div>
 *       <label {...file.label.props}>
 *         Upload File
 *       </label>
 *       <input
 *         type="file"
 *         {...file.input.props}
 *         onChange={file.actions.selectFile}
 *       />
 *
 *       {file.isSelected && (
 *         <>
 *           <img src={file.preview} alt="Preview" />
 *           <button onClick={file.actions.clearFile}>
 *             Clear
 *           </button>
 *         </>
 *       )}
 *
 *       {file.isError && (
 *         <p>File is too large</p>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 *
 * @param name - Name/ID for the file input
 * @param config - Optional configuration for file validation
 */
export function useFile(name: UseFileNameType, config?: UseFileConfigType): UseFileReturnType {
  const maxSize = config?.maxSize ?? Number.POSITIVE_INFINITY;

  const [key, setKey] = useState(0);
  const [state, setState] = useState<UseFileState>(UseFileState.idle);
  const [file, setFile] = useState<File | null>(null);

  // Memoize action handlers
  const actions = useMemo(
    () => ({
      selectFile: (event: React.ChangeEvent<HTMLInputElement>) => {
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
      },
      clearFile: () => {
        setKey((k) => k + 1);
        setFile(null);
        setState(UseFileState.idle);
      },
    }),
    [maxSize],
  );

  const preview = useMemo(() => (file ? URL.createObjectURL(file) : undefined), [file]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const matches = useCallback((states: UseFileState[]) => states.some((given) => given === state), [state]);

  // Memoize common props
  const commonProps = useMemo(
    () => ({
      matches,
      actions,
      label: { props: { htmlFor: name } },
      input: {
        key,
        props: { id: name, name, multiple: false as const },
      },
    }),
    [matches, actions, name, key],
  );

  if (state === UseFileState.idle) {
    return {
      ...commonProps,
      state,
      isIdle: true,
      isSelected: false,
      isError: false,
      data: null,
    };
  }

  if (state === UseFileState.selected) {
    return {
      ...commonProps,
      state,
      data: file as File,
      isIdle: false,
      isSelected: true,
      isError: false,
      preview,
    };
  }

  return {
    ...commonProps,
    state,
    data: null,
    isIdle: false,
    isSelected: false,
    isError: true,
    input: {
      props: { id: name, name, multiple: false, key },
    },
  };
}
