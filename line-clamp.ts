/**
 * Line clamp styling utility for React
 */

type LineClampProps = {
  "data-transform": "line-clamp";
  style: React.CSSProperties;
};

/**
 * Creates line clamp props for text truncation
 * @param lines - Number of lines before truncation
 * @returns Props for line clamping
 */
export function LineClamp(lines = 2): LineClampProps {
  return {
    "data-transform": "line-clamp",
    style: {
      "--lines": lines,
    } as React.CSSProperties,
  };
}
