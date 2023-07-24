/// <reference types="react" />
export declare type UseFilterQueryType = string | undefined;
export declare type UseFilterConfigType<T> = {
    label: string;
    enum: {
        [key: string]: UseFilterQueryType;
    };
    defaultQuery?: UseFilterQueryType;
    currentQuery?: UseFilterQueryType;
    filterFn?: (value: T) => boolean;
    onUpdate?: (current: UseFilterQueryType, previous: UseFilterQueryType) => void;
};
export declare type UseFilterReturnType<T> = {
    query: UseFilterQueryType;
    clear: VoidFunction;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterFn: UseFilterConfigType<T>["filterFn"];
    options: UseFilterConfigType<T>["enum"][0][];
    onUpdate: UseFilterConfigType<T>["onUpdate"];
    label: UseFilterConfigType<T>["label"];
    changed: boolean;
    unchanged: boolean;
};
export declare function useFilter<T = string>(config: UseFilterConfigType<T>): UseFilterReturnType<T>;
