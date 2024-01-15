export declare class Sorts {
    static updatedAtMostRecent<T extends {
        updatedAt: {
            raw: number;
        };
    }>(a: T, b: T): number;
    static updatedAtLeastRecent<T extends {
        updatedAt: {
            raw: number;
        };
    }>(a: T, b: T): number;
    static createdAtMostRecent<T extends {
        createdAt: {
            raw: number;
        };
    }>(a: T, b: T): number;
    static createdAtLeastRecent<T extends {
        createdAt: {
            raw: number;
        };
    }>(a: T, b: T): number;
    static aToZ(a: string, b: string): number;
    static zToA(a: string, b: string): number;
    static ascending(a: number, b: number): number;
    static descending(a: number, b: number): number;
}
