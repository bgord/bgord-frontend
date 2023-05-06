export declare function useScroll(): {
    actions: {
        goToTop: () => void;
    };
    position: {
        value: number;
        isInitial: boolean;
        hasChanged: boolean;
    };
    visible: boolean;
    hidden: boolean;
};
