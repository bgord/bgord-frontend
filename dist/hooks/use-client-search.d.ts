export type UseClientSearchQueryType = string;
export type UseClientSearchReturnType = {
    query: UseClientSearchQueryType;
    clear: VoidFunction;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterFn: (value: string) => boolean;
    changed: boolean;
    unchanged: boolean;
};
export declare function useClientSearch(): UseClientSearchReturnType;
