export type FilterType = Record<string, unknown> | undefined;

export class FilterUrl {
  value: string;

  constructor(url: string, filters?: FilterType) {
    const nonEmptyFilters = this.getNonEmptyFilters(filters);
    const query = new URLSearchParams(nonEmptyFilters);

    if (query.toString() === "") {
      this.value = url;

      return;
    }

    this.value = `${url}?${query.toString()}`;
  }

  private getNonEmptyFilters(filters: FilterType) {
    if (filters === undefined) return {};

    return Object.fromEntries(
      Object.entries(filters).filter(
        ([_key, value]) => value !== undefined && value !== null,
      ),
    ) as Record<string, string>;
  }
}
