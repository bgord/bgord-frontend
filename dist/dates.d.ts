export declare type DateType = Date | number | null | undefined;
export declare class DateFormatter {
    static datetime(date: DateType, defaultValue?: string): string;
    static form(date: Date | null): string;
    static clock(timestamp: number): string;
    static countdown(timestamp: number): string;
    static _pad(value: number): string;
}
