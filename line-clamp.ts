export function LineClamp(lines: number = 2) {
  return {
    "data-transform": "line-clamp",
    style: { "--lines": lines },
  };
}
