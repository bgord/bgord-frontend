export declare function Days(value: number): {
    value: number;
    hours: number;
    minutes: number;
    seconds: number;
    ms: number;
};
export declare function Hours(value: number): {
    value: number;
    minutes: number;
    seconds: number;
    ms: number;
};
export declare function Minutes(value: number): {
    value: number;
    seconds: number;
    ms: number;
};
export declare function Seconds(value: number): {
    value: number;
    ms: number;
};
export declare const Time: {
    Days: typeof Days;
    Hours: typeof Hours;
    Minutes: typeof Minutes;
    Seconds: typeof Seconds;
};
