export type RhythmBaseType = number;
export type RhythmTimesType = number;

export class Rhythm {
  static base(base: RhythmBaseType = 12) {
    return {
      times(times: RhythmTimesType) {
        const result = base * times;

        return {
          px: `${result}px`,
          raw: result,
          height: { height: `${result}px` },
          maxHeight: { maxHeight: `${result}px` },
          width: { width: `${result}px` },
          maxWidth: { maxWidth: `${result}px` },
        };
      },
    };
  }
}
