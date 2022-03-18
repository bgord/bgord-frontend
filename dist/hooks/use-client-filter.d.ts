export declare type UseFilterQueryType = string | undefined;
export declare type UseFilterConfigType<T> = {
    enum: {
        [key: string]: UseFilterQueryType;
    };
    defaultQuery?: UseFilterQueryType;
    filterFn?: (value: T) => boolean;
};
export declare function useClientFilter<T = string>(config: UseFilterConfigType<T>): {
    query: UseFilterQueryType;
    clear: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterFn: (value: T) => boolean;
    options: string[];
};
