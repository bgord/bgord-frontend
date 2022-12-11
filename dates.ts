export type DateType = Date | number | null | undefined;

export class DateFormatter {
  static datetime(date: DateType, defaultValue = "N/A"): string {
    if (!date) return defaultValue;

    return new Date(date).toLocaleString();
  }

  static form(date: Date | null): string {
    if (!date) return DateFormatter.form(new Date());

    const year = DateFormatter._pad(date.getFullYear());
    const month = DateFormatter._pad(date.getMonth() + 1);
    const day = DateFormatter._pad(date.getDate());

    return `${year}-${month}-${day}`;
  }

  static clock(timestamp: number) {
    const date = new Date(timestamp);

    const hours = DateFormatter._pad(date.getHours());
    const minutes = DateFormatter._pad(date.getMinutes());
    const seconds = DateFormatter._pad(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  }

  static countdown(timestamp: number) {
    const date = new Date(timestamp);

    const hours = DateFormatter._pad(date.getHours());
    const minutes = DateFormatter._pad(date.getMinutes());
    const seconds = DateFormatter._pad(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  }

  static _pad(value: number) {
    return String(value).padStart(2, "0");
  }
}
