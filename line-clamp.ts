type LineClampProps = {
  "data-transform": "line-clamp";
  style: React.CSSProperties;
};

export function LineClamp(lines = 2): LineClampProps {
  return {
    "data-transform": "line-clamp",
    style: {
      "--lines": lines,
    } as React.CSSProperties,
  };
}
