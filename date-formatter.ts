/**
 * Utilities for formatting dates and times in different formats
 * @module DateFormatter
 */
import type { HourType } from "@bgord/node/dist/schema";

import * as Time from "./time";

export type DateType = Date | number | null | undefined;

/**
 * Class containing static methods for date/time formatting
 */
export class DateFormatter {
  /**
   * Formats a date into localized datetime string
   * @param date - Date to format
   * @param defaultValue - Value to return if date is null/undefined
   * @returns Formatted datetime string or default value
   */
  static datetime(date: DateType, defaultValue = "N/A"): string {
    if (!date) return defaultValue;

    return new Date(date).toLocaleString();
  }

  /**
   * Formats timestamp into DD/MM format
   * @param timestamp - Unix timestamp in ms
   * @returns Formatted date string
   */
  static monthDay(timestamp: number) {
    const date = new Date(timestamp);

    const days = DateFormatter._padDatePart(date.getDate());
    const months = DateFormatter._padDatePart(date.getMonth() + 1);

    return `${days}/${months}`;
  }

  /**
   * Formats date into YYYY-MM-DD format for forms
   * @param date - Date to format or null for current date
   * @returns Formatted date string
   */
  static form(date: Date | null): string {
    if (!date) return DateFormatter.form(new Date());

    const year = DateFormatter._padDatePart(date.getFullYear());
    const month = DateFormatter._padDatePart(date.getMonth() + 1);
    const day = DateFormatter._padDatePart(date.getDate());

    return `${year}-${month}-${day}`;
  }

  /**
   * Formats timestamp into HH:MM:SS in UTC
   * @param timestamp - Unix timestamp in ms
   * @returns Formatted time string
   */
  static clockUTC(timestamp: number) {
    const date = new Date(timestamp);

    const hours = DateFormatter._padDatePart(date.getUTCHours());
    const minutes = DateFormatter._padDatePart(date.getUTCMinutes());
    const seconds = DateFormatter._padDatePart(date.getUTCSeconds());

    return `${hours}:${minutes}:${seconds}`;
  }

  /**
   * Formats timestamp into HH:MM:SS in local timezone
   * @param timestamp - Unix timestamp in ms
   * @returns Formatted time string
   */
  static clockLocal(timestamp: number) {
    const date = new Date(timestamp);

    const hours = DateFormatter._padDatePart(date.getHours());
    const minutes = DateFormatter._padDatePart(date.getMinutes());
    const seconds = DateFormatter._padDatePart(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  }

  /**
   * Formats timestamp into countdown format HH:MM:SS
   * @param timestamp - Unix timestamp in ms
   * @returns Formatted countdown string
   */
  static countdown(timestamp: number) {
    const date = new Date(timestamp);

    const hours = DateFormatter._padDatePart(date.getHours());
    const minutes = DateFormatter._padDatePart(date.getMinutes());
    const seconds = DateFormatter._padDatePart(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  }

  /**
   * Formats timestamp into datetime-local input format
   * @param timestamp - Unix timestamp in ms
   * @returns Formatted datetime string
   */
  static formDatetimeLocal(timestamp: number) {
    const localTimestamp = timestamp - Time.Minutes(new Date().getTimezoneOffset()).ms;

    return new Date(localTimestamp).toISOString().slice(0, 16);
  }

  static _padDatePart(value: number) {
    return String(value).padStart(2, "0");
  }
}

/**
 * Class for converting between UTC and local hours
 */
export class HourFormatter {
  /**
   * Converts UTC hour to local timezone
   * @param utcHour - Hour in UTC (0-23)
   * @returns Object with numeric hour value and formatted string
   */
  static convertUtcToLocal(utcHour: HourType) {
    const timeZoneOffsetInMins = new Date().getTimezoneOffset();

    const utcHourInMins = Time.Hours(utcHour).minutes;

    const localHourInMins = utcHourInMins - timeZoneOffsetInMins;
    const localHour = (localHourInMins / 60) % 24;
    const formattedLocalHour = `${String(localHour).padStart(2, "0")}:00`;

    return { value: localHour, label: formattedLocalHour };
  }
}
