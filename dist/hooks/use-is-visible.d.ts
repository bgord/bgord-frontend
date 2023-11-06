import { RefObject } from "react";
export declare const defaultUseIsVisibleConfig: {
    threshold: number;
    root: null;
    rootMargin: string;
    ref: {
        current: null;
    };
};
export declare function isIntersectionObserverSupported(): boolean;
export type UseIsVisibleConfigType = IntersectionObserverInit & {
    ref: RefObject<Element>;
};
export type UseIsVisibleReturnType = boolean;
export declare function useIsVisible(config?: UseIsVisibleConfigType): UseIsVisibleReturnType;
