import { Field } from "./hooks/field";

export type FilterType = Record<string, unknown> | undefined;

export class FilterUrl {
  value: string;

  constructor(url: string, filters?: FilterType) {
    this.value = url;

    if (!filters) return;

    const params = Object.entries(filters).filter(([, value]) => !Field.isEmpty(value as any));

    if (!params.length) return;

    const query = new URLSearchParams(Object.fromEntries(params) as Record<string, string>);

    this.value = `${url}?${query.toString()}`;
  }
}
