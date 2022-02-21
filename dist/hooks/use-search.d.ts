/// <reference types="react" />
export declare type UseSearchQueryType = string;
export declare type UseSearchReturnType = {
    query: UseSearchQueryType;
    clear: VoidFunction;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterFn: (value: string) => boolean;
};
export declare function useSearch(): UseSearchReturnType;
