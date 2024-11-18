import { describe, test, expect, vi } from "vitest";
import { exec } from "../exec";

describe("exec", () => {
  test("executes all functions in list", () => {
    const fn1 = vi.fn();
    const fn2 = vi.fn();
    const fn3 = vi.fn();

    const executor = exec([fn1, fn2, fn3]);
    executor();

    expect(fn1).toHaveBeenCalledOnce();
    expect(fn2).toHaveBeenCalledOnce();
    expect(fn3).toHaveBeenCalledOnce();
  });

  test("executes functions in order", () => {
    const order: number[] = [];
    const fn1 = () => order.push(1);
    const fn2 = () => order.push(2);
    const fn3 = () => order.push(3);

    const executor = exec([fn1, fn2, fn3]);
    executor();

    expect(order).toEqual([1, 2, 3]);
  });

  test("handles empty list", () => {
    const executor = exec([]);
    expect(() => executor()).not.toThrow();
  });

  test("executes function with return values", () => {
    const fn1 = () => "result1";
    const fn2 = () => "result2";

    const executor = exec([fn1, fn2]);
    expect(() => executor()).not.toThrow();
  });
});
