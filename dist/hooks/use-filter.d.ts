/// <reference types="react" />
export type UseFilterQueryType = string | undefined;
export type UseFilterNameType = string;
export type UseFilterConfigType<T> = {
    name: string;
    enum: {
        [key: string]: UseFilterQueryType;
    };
    defaultQuery?: UseFilterQueryType;
    currentQuery?: UseFilterQueryType;
    filterFn?: (value: T) => boolean;
    onUpdate?: (current: UseFilterQueryType, previous: UseFilterQueryType) => void;
};
export type UseFilterReturnType<T> = {
    query: UseFilterQueryType;
    clear: VoidFunction;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterFn: NonNullable<UseFilterConfigType<T>["filterFn"]>;
    options: UseFilterConfigType<T>["enum"][0][];
    onUpdate: UseFilterConfigType<T>["onUpdate"];
    name: UseFilterConfigType<T>["name"];
    changed: boolean;
    unchanged: boolean;
    label: {
        props: {
            htmlFor: UseFilterNameType;
        };
    };
    input: {
        props: {
            id: UseFilterNameType;
            name: UseFilterNameType;
        };
    };
};
export declare function useFilter<T = string>(config: UseFilterConfigType<T>): UseFilterReturnType<T>;
