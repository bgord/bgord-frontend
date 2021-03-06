export declare type UseFilterQueryType = string | undefined;
export declare type UseFilterConfigType<T> = {
    enum: {
        [key: string]: UseFilterQueryType;
    };
    defaultQuery?: UseFilterQueryType;
    filterFn?: (value: T) => boolean;
    onUpdate?: (current: UseFilterQueryType, previous: UseFilterQueryType) => void;
};
export declare function useFilter<T = string>(config: UseFilterConfigType<T>): {
    query: UseFilterQueryType;
    clear: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterFn: (value: T) => boolean;
    options: string[];
    onUpdate: (current: UseFilterQueryType, previous: UseFilterQueryType) => void;
};
