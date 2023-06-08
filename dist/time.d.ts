export declare function Days(value: number): {
    value: number;
    toHours(): number;
    toMinutes(): number;
    toSeconds(): number;
    toMs(): number;
};
export declare function Hours(value: number): {
    value: number;
    toMinutes(): number;
    toSeconds(): number;
    toMs(): number;
};
export declare function Minutes(value: number): {
    value: number;
    toSeconds(): number;
    toMs(): number;
};
export declare function Seconds(value: number): {
    value: number;
    toMs(): number;
};
export declare const Time: {
    Days: typeof Days;
    Hours: typeof Hours;
    Minutes: typeof Minutes;
    Seconds: typeof Seconds;
};
