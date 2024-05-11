export function LineClamp(lines = 2) {
  return {
    "data-transform": "line-clamp",
    style: { "--lines": lines },
  };
}
