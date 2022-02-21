import React from "react";
import type { PolymorphicPropsWithoutRef } from "react-polymorphic-types";

const OutboundLinkDefaultElement = "a";

export function OutboundLink<
  T extends React.ElementType = typeof OutboundLinkDefaultElement
>(props: PolymorphicPropsWithoutRef<{}, T>) {
  const { as, ...rest } = props;

  const Element = as || OutboundLinkDefaultElement;

  return <Element target="_blank" ref="noreferer noopener" {...rest} />;
}
