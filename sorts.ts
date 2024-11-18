export class Sorts {
  static updatedAtMostRecent<T extends { updatedAt: { raw: number } }>(
    a: T,
    b: T,
  ): number {
    return Sorts.descending(a.updatedAt.raw, b.updatedAt.raw);
  }

  static updatedAtLeastRecent<T extends { updatedAt: { raw: number } }>(
    a: T,
    b: T,
  ): number {
    return Sorts.ascending(a.updatedAt.raw, b.updatedAt.raw);
  }

  static createdAtMostRecent<T extends { createdAt: { raw: number } }>(
    a: T,
    b: T,
  ): number {
    return Sorts.descending(a.createdAt.raw, b.createdAt.raw);
  }

  static createdAtLeastRecent<T extends { createdAt: { raw: number } }>(
    a: T,
    b: T,
  ): number {
    return Sorts.ascending(a.createdAt.raw, b.createdAt.raw);
  }

  static aToZ(a: string, b: string): number {
    return a.localeCompare(b);
  }

  static zToA(a: string, b: string): number {
    return b.localeCompare(a);
  }

  static ascending(a: number, b: number): number {
    if (a === b) return 0;
    return a > b ? 1 : -1;
  }

  static descending(a: number, b: number): number {
    if (a === b) return 0;
    return a < b ? 1 : -1;
  }
}
