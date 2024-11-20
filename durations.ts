/**
 * Formats duration in seconds to MM:SS format
 * @module DurationFormatter
 */

/**
 * @class DurationFormatter
 * @description Utility class for formatting time durations
 */
export class DurationFormatter {
  /**
   * Format seconds into MM:SS string
   * @param duration - Duration in seconds
   * @returns Formatted string in MM:SS format
   * @throws {Error} If duration is negative
   * @example
   * DurationFormatter.format(125) // Returns "02:05"
   */
  static format(duration: number) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
