import React from "react";
export type ToastsConfigType = {
    timeout?: number;
};
export type BaseToastType = {
    id: string;
    message: string;
};
type ToastsContextDataType<ToastType extends BaseToastType = BaseToastType> = [
    ToastType[],
    {
        add: (toast: Omit<ToastType, "id">) => void;
        remove: (toast: ToastType) => void;
        clear: VoidFunction;
    }
];
export declare function ToastsContextProvider(props: {
    children: JSX.Element | JSX.Element[];
} & ToastsConfigType): React.JSX.Element;
export declare function useToastsContext<ToastType extends BaseToastType = BaseToastType>(): ToastsContextDataType<ToastType>;
export declare function useToastTrigger<ToastType extends BaseToastType = BaseToastType>(): (toast: Omit<ToastType, "id">) => void;
export {};
