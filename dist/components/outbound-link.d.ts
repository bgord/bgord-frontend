import React from "react";
import type { PolymorphicPropsWithoutRef } from "react-polymorphic-types";
export declare const OutboundLinkDefaultElement = "a";
export declare type HeadingProps<T extends React.ElementType = typeof OutboundLinkDefaultElement> = PolymorphicPropsWithoutRef<{}, T>;
export declare function Heading<T extends React.ElementType = typeof OutboundLinkDefaultElement>({ as, ...props }: HeadingProps<T>): JSX.Element;
