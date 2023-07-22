export declare type RhythmBaseType = number;
export declare type RhythmTimesType = number;
export declare class Rhythm {
    static readonly DEFAULT_BASE_PX = 12;
    static base(base?: RhythmBaseType): {
        times(times: RhythmTimesType): {
            px: string;
            raw: number;
            height: {
                height: string;
            };
            minHeight: {
                minHeight: string;
            };
            maxHeight: {
                maxHeight: string;
            };
            width: {
                width: string;
            };
            minWidth: {
                minWidth: string;
            };
            maxWidth: {
                maxWidth: string;
            };
            square: {
                height: string;
                width: string;
            };
        };
    };
}
