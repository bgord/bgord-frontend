/// <reference types="react" />
export type PatternConfigType = {
    min?: number;
    max?: number;
    required?: JSX.IntrinsicElements["input"]["required"];
};
export declare class Form {
    static pattern(config: PatternConfigType): JSX.IntrinsicElements["textarea"] & JSX.IntrinsicElements["input"];
}
