/**
 * Form validation pattern generator
 * @module Form
 */

/**
 * Configuration for pattern validation
 */
type PatternConfigType = {
  min?: number;
  max?: number;
  required?: JSX.IntrinsicElements["input"]["required"];
};
/**
 * Form utilities for HTML inputs
 */
export class Form {
  /**
   * Generates regex pattern for input length validation
   * @param config - Pattern configuration
   * @returns Input/textarea props with pattern and required
   */
  static pattern(
    config: PatternConfigType,
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
