export type PatternConfigType = {
  min?: number;
  max?: number;
  required?: JSX.IntrinsicElements["input"]["required"];
};

export class Form {
  static pattern(
    config: PatternConfigType
  ): JSX.IntrinsicElements["textarea"] & JSX.IntrinsicElements["input"] {
    const required = config.required ?? true;

    if (config.min && !config.max)
      return { pattern: `.{${config.min}}`, required };

    if (config.min && config.max)
      return { pattern: `.{${config.min},${config.max}}`, required };

    if (!config.min && config.max)
      return { pattern: `.{,${config.max}}`, required };

    return { pattern: undefined, required };
  }
}
