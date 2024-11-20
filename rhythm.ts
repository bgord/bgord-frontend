/**
 * Utility for consistent spacing/sizing based on a rhythm unit
 */
type RhythmBaseType = number;
type RhythmTimesType = number;

const DEFAULT_BASE_PX = 12;

/**
 * Creates rhythm-based sizing utility
 * @param base - Base unit in pixels
 */
export function Rhythm(base: RhythmBaseType = DEFAULT_BASE_PX) {
  return {
    /**
     * Multiplies base by given factor
     * @param times - Multiplication factor
     * @returns Sizing values in different formats
     */
    times(times: RhythmTimesType) {
      const result = base * times;

      const dimensions = {
        height: { height: px(result) },
        minHeight: { minHeight: px(result) },
        maxHeight: { maxHeight: px(result) },
        width: { width: px(result) },
        minWidth: { minWidth: px(result) },
        maxWidth: { maxWidth: px(result) },
        square: { height: px(result), width: px(result) },
      };

      const style = {
        height: { style: { height: px(result) } },
        minHeight: { style: { minHeight: px(result) } },
        maxHeight: { style: { maxHeight: px(result) } },
        width: { style: { width: px(result) } },
        minWidth: { style: { minWidth: px(result) } },
        maxWidth: { style: { maxWidth: px(result) } },
        square: { style: { height: px(result), width: px(result) } },
      };

      return { px: px(result), raw: result, style, ...dimensions };
    },
  };
}

function px(number: number) {
  return `${number}px`;
}
