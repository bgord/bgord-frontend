export type DateType = Date | number | null | undefined;

export class DateFormatter {
  datetime(date: DateType, defaultValue = "N/A"): string {
    if (!date) return defaultValue;

    return new Date(date).toLocaleString();
  }
}
