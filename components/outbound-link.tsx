import React from "react";
import type { PolymorphicPropsWithoutRef } from "react-polymorphic-types";

const OutboundLinkDefaultElement = "a";

export function OutboundLink<
  T extends React.ElementType = typeof OutboundLinkDefaultElement,
  // biome-ignore lint: lint/complexity/noBannedTypes
>(props: PolymorphicPropsWithoutRef<{}, T>) {
  const { as, ...rest } = props;

  const Element = as || OutboundLinkDefaultElement;

  return <Element target="_blank" rel="noreferer noopener" {...rest} />;
}
