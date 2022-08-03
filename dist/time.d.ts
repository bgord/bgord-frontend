export declare class Days {
    value: number;
    constructor(value: number);
    toHours(): number;
    toMinutes(): number;
    toSeconds(): number;
    toMs(): number;
}
export declare class Hours {
    value: number;
    constructor(value: number);
    toMinutes(): number;
    toSeconds(): number;
    toMs(): number;
}
export declare class Minutes {
    value: number;
    constructor(value: number);
    toSeconds(): number;
    toMs(): number;
}
export declare class Seconds {
    value: number;
    constructor(value: number);
    toMs(): number;
}
export declare const Time: {
    Days: typeof Days;
    Hours: typeof Hours;
    Minutes: typeof Minutes;
    Seconds: typeof Seconds;
};
