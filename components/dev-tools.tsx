import React from "react";

import { useWindowDimensions } from "../hooks/use-window-dimensions";
import { useToggle } from "../hooks/use-toggle";
import { useField } from "../hooks/use-field";
import { exec } from "../exec";

function Dimensions(props: JSX.IntrinsicElements["div"]) {
  const dimensions = useWindowDimensions();

  return (
    <div data-fs="12" {...props}>
      {dimensions.width} x {dimensions.height}
    </div>
  );
}

function Truncates() {
  const enabled = useToggle();
  const length = useField("length", 128);

  const [cache, setCache] = React.useState(new Map());

  const handleTruncateClick = () => {
    const elements = document.querySelectorAll('[data-transform="truncate"]');

    const updatedCache = new Map(cache);

    // biome-ignore lint: lint/complexity/noForEach
    elements.forEach((element) => {
      const originalText = element.textContent;

      if (!updatedCache.has(element)) {
        updatedCache.set(element, originalText);
        element.textContent = "x".repeat(length.value);
      } else {
        element.textContent = updatedCache.get(element);
        updatedCache.delete(element);
      }
    });

    setCache(updatedCache);
  };

  return (
    <div data-display="flex" data-cross="center" data-gap="6">
      <label className="c-label" {...length.label.props}>
        Length
      </label>

      <input
        className="c-input"
        type="number"
        value={length.value}
        onChange={(event) => length.set(event.currentTarget.valueAsNumber)}
        {...length.input.props}
      />
      <button
        className="c-button"
        data-variant="bare"
        type="button"
        onClick={exec([() => handleTruncateClick(), enabled.toggle])}
      >
        {enabled.on ? "Hide truncates" : "Expand truncates"}
      </button>
    </div>
  );
}

export const DevTools = { Dimensions, Truncates };
