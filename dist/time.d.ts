export declare function Days(value: number): {
    toHours(): number;
    toMinutes(): number;
    toSeconds(): number;
    toMs(): number;
};
export declare function Hours(value: number): {
    toMinutes(): number;
    toSeconds(): number;
    toMs(): number;
};
export declare function Minutes(value: number): {
    toSeconds(): number;
    toMs(): number;
};
export declare function Seconds(value: number): {
    toMs(): number;
};
export declare const Time: {
    Days: typeof Days;
    Hours: typeof Hours;
    Minutes: typeof Minutes;
    Seconds: typeof Seconds;
};
