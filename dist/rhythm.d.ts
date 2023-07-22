export declare type RhythmBaseType = number;
export declare type RhythmTimesType = number;
export declare function Rhythm(base?: RhythmBaseType): {
    times(times: RhythmTimesType): {
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
        px: string;
        raw: number;
        style: {
            height: {
                style: {
                    height: string;
                };
            };
            minHeight: {
                style: {
                    minHeight: string;
                };
            };
            maxHeight: {
                style: {
                    maxHeight: string;
                };
            };
            width: {
                style: {
                    width: string;
                };
            };
            minWidth: {
                style: {
                    minWidth: string;
                };
            };
            maxWidth: {
                style: {
                    maxWidth: string;
                };
            };
            square: {
                style: {
                    height: string;
                    width: string;
                };
            };
        };
    };
};
