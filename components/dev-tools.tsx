import React from "react";

import { useWindowDimensions } from "../hooks";

function Dimensions(props: JSX.IntrinsicElements["div"]) {
  const dimensions = useWindowDimensions();

  return (
    <div data-fs="12" {...props}>
      {dimensions.width} x {dimensions.height}
    </div>
  );
}

export const DevTools = { Dimensions };
