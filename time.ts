/**
 * Time conversion utilities
 */

/**
 * Converts days to other time units
 */
export function Days(value: number) {
  return {
    value,
    hours: value * 24,
    minutes: value * 24 * 60,
    seconds: value * 24 * 60 * 60,
    ms: value * 24 * 60 * 60 * 1000,
  };
}

/**
 * Converts hours to other time units
 */
export function Hours(value: number) {
  return {
    value,
    minutes: value * 60,
    seconds: value * 60 * 60,
    ms: value * 60 * 60 * 1000,
  };
}

/**
 * Converts minutes to other time units
 */
export function Minutes(value: number) {
  return { value, seconds: value * 60, ms: value * 60 * 1000 };
}

/**
 * Converts seconds to milliseconds
 */
export function Seconds(value: number) {
  return { value, ms: value * 1000 };
}

export const Time = { Days, Hours, Minutes, Seconds };
