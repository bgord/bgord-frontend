export class Days {
  value: number;

  static hours = 24;

  static minutes = 24 * 60;

  static seconds = 24 * 60 * 60;

  static ms = 24 * 60 * 60 * 1000;

  constructor(value: number) {
    this.value = value;
  }

  toHours() {
    return this.value * Days.hours;
  }

  toMinutes() {
    return this.value * Days.minutes;
  }

  toSeconds() {
    return this.value * Days.seconds;
  }

  toMs() {
    return this.value * Days.ms;
  }
}

export class Hours {
  value: number;

  static minutes = 60;

  static seconds = 60 * 60;

  static ms = 60 * 60 * 1000;

  constructor(value: number) {
    this.value = value;
  }

  toMinutes() {
    return this.value * Hours.minutes;
  }

  toSeconds() {
    return this.value * Hours.seconds;
  }

  toMs() {
    return this.value * Hours.ms;
  }
}

export class Minutes {
  value: number;

  static seconds = 60 * 1000;

  static ms = 1000;

  constructor(value: number) {
    this.value = value;
  }

  toSeconds() {
    return this.value * Minutes.seconds;
  }

  toMs() {
    return this.value * Minutes.ms;
  }
}

export class Seconds {
  value: number;

  static ms = 1000;

  constructor(value: number) {
    this.value = value;
  }

  toMs() {
    return this.value * Seconds.ms;
  }
}

export class MiliSeconds {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  toMs() {
    return this.value;
  }
}

export const Time = { Days, Hours, Minutes, Seconds };
