export class Sorts {
  static updatedAtMostRecent<T extends { updatedAt: { raw: number } }>(
    a: T,
    b: T
  ): number {
    return a.updatedAt.raw < b.updatedAt.raw ? 1 : -1;
  }

  static updatedAtLeastRecent<T extends { updatedAt: { raw: number } }>(
    a: T,
    b: T
  ): number {
    return a.updatedAt.raw > b.updatedAt.raw ? 1 : -1;
  }

  static createdAtMostRecent<T extends { createdAt: { raw: number } }>(
    a: T,
    b: T
  ): number {
    return a.createdAt.raw < b.createdAt.raw ? 1 : -1;
  }

  static createdAtLeastRecent<T extends { createdAt: { raw: number } }>(
    a: T,
    b: T
  ): number {
    return a.createdAt.raw > b.createdAt.raw ? 1 : -1;
  }

  static aToZ(a: string, b: string): number {
    return a.localeCompare(b);
  }

  static zToA(a: string, b: string): number {
    return b.localeCompare(a);
  }
}
