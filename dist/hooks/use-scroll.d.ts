import { UseToggleReturnType } from "./use-toggle";
export declare type ScrollPositionType = number;
export declare type UseScrollReturnType = {
    actions: {
        goToTop: VoidFunction;
    };
    position: {
        value: ScrollPositionType;
        isInitial: boolean;
        hasChanged: boolean;
    };
    visible: UseToggleReturnType["on"];
    hidden: UseToggleReturnType["off"];
};
export declare function useScroll(): UseScrollReturnType;
