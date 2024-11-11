import { Field } from "./field";
import {
  useNewField,
  UseNewFieldReturnType,
  UseNewFieldConfigType,
  UseNewFieldStrategyEnum,
} from "./use-new-field";

export type UseNewClientSearchQueryType = string;

export type UseNewClientSearchConfigType = Pick<
  UseNewFieldConfigType<UseNewClientSearchQueryType>,
  "name"
>;

export type UseNewClientSearchReturnType =
  UseNewFieldReturnType<UseNewClientSearchQueryType> & {
    filterFn: (value: string) => boolean;
  };

export function useNewClientSearch(
  config: UseNewClientSearchConfigType,
): UseNewClientSearchReturnType {
  const query = useNewField<UseNewClientSearchQueryType>({
    name: config.name,
    defaultValue: "",
    strategy: UseNewFieldStrategyEnum.local,
  });

  function filterFn(given: string) {
    const currentQuery = new Field<UseNewClientSearchQueryType>(
      query.currentValue,
    );

    if (currentQuery.isEmpty()) return true;

    return given?.toLowerCase().includes(currentQuery.get().toLowerCase());
  }

  return { ...query, filterFn };
}
