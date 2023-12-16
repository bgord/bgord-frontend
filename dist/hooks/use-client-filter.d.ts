/// <reference types="react" />
export type UseClientFilterQueryType = string | undefined;
export type UseClientFilterNameType = string;
export type UseClientFilterConfigType<T> = {
    name: string;
    enum: {
        [key: string]: UseClientFilterQueryType;
    };
    defaultQuery?: UseClientFilterQueryType;
    currentQuery?: UseClientFilterQueryType;
    filterFn?: (value: T) => boolean;
    onUpdate?: (current: UseClientFilterQueryType, previous: UseClientFilterQueryType) => void;
};
export type UseClientFilterReturnType<T> = {
    query: UseClientFilterQueryType;
    clear: VoidFunction;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterFn: NonNullable<UseClientFilterConfigType<T>["filterFn"]>;
    options: UseClientFilterConfigType<T>["enum"][0][];
    onUpdate: UseClientFilterConfigType<T>["onUpdate"];
    name: UseClientFilterConfigType<T>["name"];
    changed: boolean;
    unchanged: boolean;
    label: {
        props: {
            htmlFor: UseClientFilterNameType;
        };
    };
    input: {
        props: {
            id: UseClientFilterNameType;
            name: UseClientFilterNameType;
        };
    };
};
export declare function useClientFilter<T = string>(config: UseClientFilterConfigType<T>): UseClientFilterReturnType<T>;
