import React from "react";
export declare enum AnimaState {
    appearing = "appearing",
    appeared = "appeared",
    hiding = "hiding",
    hidden = "hidden"
}
export type AnimaEffectType = string;
export type AnimaConfigType = {
    children: JSX.Element;
    visible: boolean;
    effect: AnimaEffectType;
    duration?: number;
    isInitial?: boolean;
};
export declare function Anima(props: AnimaConfigType): React.FunctionComponentElement<any> | null;
export declare function getAnimaProps(props: Record<string, any>): {
    "data-anima": AnimaState | undefined;
    "data-anima-effect": string | undefined;
    style: React.CSSProperties;
};
export type AnimaListPropsType = {
    children: JSX.Element[];
} & JSX.IntrinsicElements["ul"];
export declare function AnimaList(props: AnimaListPropsType): JSX.Element;
export type UseAnimaListDirectionType = "head" | "tail";
export type UseAnimaListConfigType = {
    direction?: UseAnimaListDirectionType;
    duration?: number;
};
export type UseAnimaListItemType<T> = {
    item: T;
    props: {
        visible: boolean;
    };
};
type UseAnimaListReturnType<T> = {
    items: {
        item: T;
        props: {
            visible: boolean;
        };
    }[];
    count: number;
};
export declare function useAnimaList<T extends {
    id: string;
}>(list: T[], config?: UseAnimaListConfigType): UseAnimaListReturnType<T>;
export {};
