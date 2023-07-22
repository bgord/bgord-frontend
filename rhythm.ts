export type RhythmBaseType = number;
export type RhythmTimesType = number;

export class Rhythm {
  static base(base: RhythmBaseType = 12) {
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
        };
      },
    };
  }
}

function px(number: number) {
  return `${number}px`;
}
