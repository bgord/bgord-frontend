export declare class Days {
    value: number;
    static hours: number;
    static minutes: number;
    static seconds: number;
    static ms: number;
    constructor(value: number);
    toHours(): number;
    toMinutes(): number;
    toSeconds(): number;
    toMs(): number;
}
export declare class Hours {
    value: number;
    static minutes: number;
    static seconds: number;
    static ms: number;
    constructor(value: number);
    toMinutes(): number;
    toSeconds(): number;
    toMs(): number;
}
export declare class Minutes {
    value: number;
    static seconds: number;
    static ms: number;
    constructor(value: number);
    toSeconds(): number;
    toMs(): number;
}
export declare class Seconds {
    value: number;
    static ms: number;
    constructor(value: number);
    toMs(): number;
}
export declare class MiliSeconds {
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
