import { useField, UseFieldNameType, UseFieldReturnType } from "./use-field";

export type UseClientSortFnType<T> = (a: T, b: T) => number;

export type UseClientSortReturnType<T> = {
  sortFn: UseClientSortFnType<T>;
  options: UseClientSortOptionType[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & UseFieldReturnType<UseClientSortOptionType>;

export type UseClientSortOptionType = string;

type UseClientSortConfigType<T> = {
  enum: Record<UseClientSortOptionType, UseClientSortOptionType> & {
    default: UseClientSortOptionType;
  };
  options: Record<UseClientSortOptionType, UseClientSortFnType<T>>;
};

export const defaultSortFn = () => 0;

export function useClientSort<T>(
  name: UseFieldNameType,
  config: UseClientSortConfigType<T>
): UseClientSortReturnType<T> {
  const state = useField<UseClientSortOptionType>(name, config.enum.default);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newSort = event.currentTarget.value;
    const isNewSortInEnum = Boolean(config.enum[String(newSort)]);

    state.set(isNewSortInEnum ? newSort : config.enum.default);
  }

  if (state.value === config.enum.default) {
    return {
      sortFn: defaultSortFn,
      options: Object.keys(config.options),
      onChange,
      ...state,
    };
  }
  return {
    sortFn: config.options[state.value] ?? defaultSortFn,
    options: Object.keys(config.options),
    onChange,
    ...state,
  };
}
