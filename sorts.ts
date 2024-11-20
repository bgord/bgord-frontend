/**
 * Collection of sorting functions for common use cases
 */

export class Sorts {
  /** Sort by updatedAt timestamp descending */
  static updatedAtMostRecent<T extends { updatedAt: { raw: number } }>(a: T, b: T): number {
    return Sorts.descending(a.updatedAt.raw, b.updatedAt.raw);
  }
  /** Sort by updatedAt timestamp ascending */
  static updatedAtLeastRecent<T extends { updatedAt: { raw: number } }>(a: T, b: T): number {
    return Sorts.ascending(a.updatedAt.raw, b.updatedAt.raw);
  }
  /** Sort by createdAt timestamp descending */
  static createdAtMostRecent<T extends { createdAt: { raw: number } }>(a: T, b: T): number {
    return Sorts.descending(a.createdAt.raw, b.createdAt.raw);
  }
  /** Sort by createdAt timestamp ascending */
  static createdAtLeastRecent<T extends { createdAt: { raw: number } }>(a: T, b: T): number {
    return Sorts.ascending(a.createdAt.raw, b.createdAt.raw);
  }
  /** Alphabetical sort A-Z */
  static aToZ(a: string, b: string): number {
    return a.localeCompare(b);
  }
  /** Alphabetical sort Z-A */
  static zToA(a: string, b: string): number {
    return b.localeCompare(a);
  }
  /** Numeric sort ascending */
  static ascending(a: number, b: number): number {
    if (a === b) return 0;
    return a > b ? 1 : -1;
  }
  /** Numeric sort descending */
  static descending(a: number, b: number): number {
    if (a === b) return 0;
    return a < b ? 1 : -1;
  }
}
