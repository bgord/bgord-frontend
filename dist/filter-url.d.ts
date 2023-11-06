export type FilterType = Record<string, unknown> | undefined;
export declare class FilterUrl {
    value: string;
    constructor(url: string, filters?: FilterType);
    private getNonEmptyFilters;
}
