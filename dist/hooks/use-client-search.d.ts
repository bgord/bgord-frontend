/// <reference types="react" />
export declare type UseClientSearchQueryType = string;
export declare type UseClientSearchReturnType = {
    query: UseClientSearchQueryType;
    clear: VoidFunction;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterFn: (value: string) => boolean;
    changed: boolean;
    unchanged: boolean;
};
export declare function useClientSearch(): UseClientSearchReturnType;
