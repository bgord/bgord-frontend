/**
 * Utility for formatting numbers with thousands separators
 */
export class ThousandsSeparator {
  /** Default separator character */
  private static DEFAULT_SEPARATOR = " ";
  /**
   * Format number with thousands separator
   * @param value - Number to format
   * @param separator - Custom separator (default: space)
   * @returns Formatted string
   */
  static format(value: number, separator = ThousandsSeparator.DEFAULT_SEPARATOR): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }
}
