import React from "react";
import type { PolymorphicPropsWithoutRef } from "react-polymorphic-types";

export const OutboundLinkDefaultElement = "a";

// Extend own props with others inherited from the underlying element type
// Own props take precedence over the inherited ones
export type HeadingProps<
  T extends React.ElementType = typeof OutboundLinkDefaultElement
> = PolymorphicPropsWithoutRef<{}, T>;

export function Heading<
  T extends React.ElementType = typeof OutboundLinkDefaultElement
>({ as, ...props }: HeadingProps<T>) {
  const Element: React.ElementType = as || OutboundLinkDefaultElement;

  return <Element target="_blank" ref="noreferer noopener" {...props} />;
}
