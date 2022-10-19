export class DurationFormatter {
  static format(duration: number) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
