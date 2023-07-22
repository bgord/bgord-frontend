export type RhythmBaseType = number;
export type RhythmTimesType = number;

export class Rhythm {
  static readonly DEFAULT_BASE_PX = 12;

  static base(base: RhythmBaseType = Rhythm.DEFAULT_BASE_PX) {
    return {
      times(times: RhythmTimesType) {
        const result = base * times;

        return {
          px: px(result),
          raw: result,
          height: { height: px(result) },
          minHeight: { minHeight: px(result) },
          maxHeight: { maxHeight: px(result) },
          width: { width: px(result) },
          minWidth: { minWidth: px(result) },
          maxWidth: { maxWidth: px(result) },
          square: { height: px(result), width: px(result) },
        };
      },
    };
  }
}

function px(number: number) {
  return `${number}px`;
}
