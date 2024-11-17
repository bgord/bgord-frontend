import { Field } from "./field";
import {
  useFieldConfigType,
  useFieldReturnType,
  useFieldStrategyEnum,
  useField,
} from "./use-field";

type useClientSearchQueryType = string;

type useClientSearchConfigType = Pick<useFieldConfigType<useClientSearchQueryType>, "name">;

export type useClientSearchReturnType = useFieldReturnType<useClientSearchQueryType> & {
  filterFn: (value: string) => boolean;
} & {
  strategy: useFieldStrategyEnum.local;
};

export function useClientSearch(config: useClientSearchConfigType): useClientSearchReturnType {
  const query = useField<useClientSearchQueryType>({
    name: config.name,
    defaultValue: "",
    strategy: useFieldStrategyEnum.local,
  });

  function filterFn(given: string) {
    const currentQuery = new Field<useClientSearchQueryType>(query.currentValue);

    if (currentQuery.isEmpty()) return true;

    return given?.toLowerCase().includes(currentQuery.get().toLowerCase());
  }

  return { ...query, filterFn, strategy: useFieldStrategyEnum.local };
}
