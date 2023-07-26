import type { HourType } from "@bgord/node/dist/schema";

import * as Time from "./time";

export type DateType = Date | number | null | undefined;

export class DateFormatter {
  static datetime(date: DateType, defaultValue = "N/A"): string {
    if (!date) return defaultValue;

    return new Date(date).toLocaleString();
  }

  static monthDay(timestamp: number) {
    const date = new Date(timestamp);

    const days = DateFormatter._padDatePart(date.getDate());
    const months = DateFormatter._padDatePart(date.getMonth() + 1);

    return `${months}/${days}`;
  }

  static form(date: Date | null): string {
    if (!date) return DateFormatter.form(new Date());

    const year = DateFormatter._padDatePart(date.getFullYear());
    const month = DateFormatter._padDatePart(date.getMonth() + 1);
    const day = DateFormatter._padDatePart(date.getDate());

    return `${year}-${month}-${day}`;
  }

  static clockUTC(timestamp: number) {
    const date = new Date(timestamp);

    const hours = DateFormatter._padDatePart(date.getUTCHours());
    const minutes = DateFormatter._padDatePart(date.getUTCMinutes());
    const seconds = DateFormatter._padDatePart(date.getUTCSeconds());

    return `${hours}:${minutes}:${seconds}`;
  }

  static clockLocal(timestamp: number) {
    const date = new Date(timestamp);

    const hours = DateFormatter._padDatePart(date.getHours());
    const minutes = DateFormatter._padDatePart(date.getMinutes());
    const seconds = DateFormatter._padDatePart(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  }

  static countdown(timestamp: number) {
    const date = new Date(timestamp);

    const hours = DateFormatter._padDatePart(date.getHours());
    const minutes = DateFormatter._padDatePart(date.getMinutes());
    const seconds = DateFormatter._padDatePart(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  }

  static formDatetimeLocal(timestamp: number) {
    const localTimestamp =
      timestamp - Time.Minutes(new Date().getTimezoneOffset()).ms;

    return new Date(localTimestamp).toISOString().slice(0, 16);
  }

  static _padDatePart(value: number) {
    return String(value).padStart(2, "0");
  }
}

export class HourFormatter {
  static convertUtcToLocal(utcHour: HourType) {
    const timeZoneOffsetInMins = new Date().getTimezoneOffset();

    const utcHourInMins = Time.Hours(utcHour).minutes;

    const localHourInMins = utcHourInMins - timeZoneOffsetInMins;
    const localHour = (localHourInMins / 60) % 24;
    const formattedLocalHour = `${String(localHour).padStart(2, "0")}:00`;

    return { value: localHour, label: formattedLocalHour };
  }
}
