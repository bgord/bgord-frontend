import { useState } from "react";

import { exec } from "../exec";
import { useNewField } from "../hooks/use-new-field";
import { useToggle } from "../hooks/use-toggle";
import { useWindowDimensions } from "../hooks/use-window-dimensions";

function Dimensions(props: JSX.IntrinsicElements["div"]) {
  const dimensions = useWindowDimensions();

  return (
    <div data-fs="12" {...props}>
      {dimensions.width} x {dimensions.height}
    </div>
  );
}

function Truncates() {
  const enabled = useToggle({ name: "truncates" });
  const length = useNewField<number>({
    name: "length",
    defaultValue: 128,
  });

  const [cache, setCache] = useState(new Map());

  const handleTruncateClick = () => {
    const elements = document.querySelectorAll('[data-transform="truncate"]');

    const updatedCache = new Map(cache);

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
