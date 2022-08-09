/// <reference types="react" />
import * as hooks from "../hooks";
export declare type DialogPropsType = hooks.UseToggleReturnType & JSX.IntrinsicElements["div"] & {
    DialogOverlay?: JSX.Element;
};
export declare function Dialog(props: DialogPropsType): JSX.Element | null;
export declare function DefaultDialogOverlay(props: JSX.IntrinsicElements["div"]): JSX.Element;
