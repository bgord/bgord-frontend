export type DateType = Date | number | null | undefined;

export class DateFormatter {
  static datetime(date: DateType, defaultValue = "N/A"): string {
    if (!date) return defaultValue;

    return new Date(date).toLocaleString();
  }

  static form(date: Date | null): string {
    if (!date) return DateFormatter.form(new Date());

    const year = String(date.getFullYear()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
}
