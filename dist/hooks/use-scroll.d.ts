import { UseToggleReturnType } from "./use-toggle";
export type ScrollPositionType = number;
export type UseScrollReturnType = {
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
