import React from "react";
export declare enum AnimaState {
    appearing = "appearing",
    appeared = "appeared",
    hidding = "hidding",
    hidden = "hidden"
}
export declare type AnimaEffectType = string;
export declare type AnimaConfigType = {
    children: JSX.Element;
    visible: boolean;
    effect: AnimaEffectType;
    duration?: number;
    isInitial?: boolean;
};
export declare function Anima(props: AnimaConfigType): React.FunctionComponentElement<any> | null;
