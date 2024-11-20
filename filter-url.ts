/**
 * URL builder with filter parameter support
 * @module FilterUrl
 */
import { Field } from "./hooks/field";

export type FilterType = Record<string, unknown> | undefined;

/**
 * Creates URLs with optional filter query parameters
 */
export class FilterUrl {
  /**
   * Base URL with optional filter params
   */
  value: string;

  /**
   * @param url - Base URL
   * @param filters - Optional filter parameters
   * @throws {TypeError} If URL is invalid
   */
  constructor(url: string, filters?: FilterType) {
    this.value = url;

    if (!filters) return;

    const params = Object.entries(filters).filter(([, value]) => !Field.isEmpty(value as any));

    if (!params.length) return;

    const query = new URLSearchParams(Object.fromEntries(params) as Record<string, string>);

    this.value = `${url}?${query.toString()}`;
  }
}
