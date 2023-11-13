type ApproximationValueType = number;
type ApproximationResultType = number;
type ApproximationDecimalPlacesType = number;
export declare class Approximation {
    static float(value: ApproximationValueType, decimalPlaces?: ApproximationDecimalPlacesType): ApproximationResultType;
}
type MinMaxScalerValueType = number;
type MinMaxScalerConfigType = {
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
        original: number;
        scaled: number;
        isMin: boolean;
        isMax: boolean;
    };
    descale(scaled: MinMaxScalerValueType): {
        original: number;
        scaled: number;
        isLowerBound: boolean;
        isUpperBound: boolean;
    };
    static getMinMax(values: MinMaxScalerValueType[]): {
        min: number;
        max: number;
    };
}
export {};
