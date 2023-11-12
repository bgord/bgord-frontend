export type MinMaxScalerValueType = number;
export type MinMaxScalerConfigType = {
    min: MinMaxScalerValueType;
    max: MinMaxScalerValueType;
    bound?: {
        lower: MinMaxScalerValueType;
        upper: MinMaxScalerValueType;
    };
};
export declare class MinMaxScaler {
    private readonly min;
    private readonly max;
    private readonly lower;
    private readonly upper;
    constructor(config: MinMaxScalerConfigType);
    scale(value: MinMaxScalerValueType): {
        actual: number;
        scaled: number;
        isMin: boolean;
        isMax: boolean;
    };
    static getMinMax(values: MinMaxScalerValueType[]): {
        min: number;
        max: number;
    };
}
