export declare type RhythmBaseType = number;
export declare type RhythmTimesType = number;
export declare class Rhythm {
    static base(base?: RhythmBaseType): {
        times(times: RhythmTimesType): {
            px: string;
            raw: number;
            height: {
                height: string;
            };
            maxHeight: {
                maxHeight: string;
            };
            width: {
                width: string;
            };
            maxWidth: {
                maxWidth: string;
            };
        };
    };
}
