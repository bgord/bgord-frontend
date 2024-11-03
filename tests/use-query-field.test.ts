import { describe, test, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useQueryField } from "../hooks/use-query-field";

describe("useQueryField", () => {
  test("empty default value", () => {
    const name = "search";

    const hook = renderHook(() => useQueryField({ name }));

    const field = hook.result.current;

    expect(field.defaultValue).toEqual(undefined);
    expect(field.currentValue).toEqual(undefined);
    expect(typeof field.set).toEqual("function");
    expect(typeof field.handleChange).toEqual("function");
    expect(typeof field.clear).toEqual("function");
    expect(field.label).toEqual({ props: { htmlFor: name } });
    expect(field.input).toEqual({
      props: { id: name, name },
    });
    expect(field.changed).toEqual(false);
    expect(field.unchanged).toEqual(true);
    expect(field.empty).toEqual(true);
  });

  test("non-empty default value", () => {
    const name = "search";

    const hook = renderHook(() => useQueryField({ name, defaultValue: "abc" }));

    const field = hook.result.current;

    expect(field.defaultValue).toEqual("abc");
    expect(field.currentValue).toEqual("abc");
    expect(typeof field.set).toEqual("function");
    expect(typeof field.handleChange).toEqual("function");
    expect(typeof field.clear).toEqual("function");
    expect(field.label).toEqual({ props: { htmlFor: name } });
    expect(field.input).toEqual({
      props: { id: name, name },
    });
    expect(field.changed).toEqual(false);
    expect(field.unchanged).toEqual(true);
    expect(field.empty).toEqual(false);
  });

  test("updated empty default value", () => {
    const name = "search";

    const hook = renderHook(() => useQueryField({ name }));

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(undefined);
    expect(first.currentValue).toEqual(undefined);
    expect(typeof first.set).toEqual("function");
    expect(typeof first.handleChange).toEqual("function");
    expect(typeof first.clear).toEqual("function");
    expect(first.label).toEqual({ props: { htmlFor: name } });
    expect(first.input).toEqual({
      props: { id: name, name },
    });
    expect(first.changed).toEqual(false);
    expect(first.unchanged).toEqual(true);
    expect(first.empty).toEqual(true);

    act(() => hook.result.current.set("abc"));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(undefined);
    expect(second.currentValue).toEqual("abc");
    expect(typeof second.set).toEqual("function");
    expect(typeof second.handleChange).toEqual("function");
    expect(typeof second.clear).toEqual("function");
    expect(second.label).toEqual({ props: { htmlFor: name } });
    expect(second.input).toEqual({
      props: { id: name, name },
    });
    expect(second.changed).toEqual(true);
    expect(second.unchanged).toEqual(false);
    expect(second.empty).toEqual(false);
  });

  test("clear restores empty default value", () => {
    const name = "search";

    const hook = renderHook(() => useQueryField({ name }));

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(undefined);
    expect(first.currentValue).toEqual(undefined);
    expect(typeof first.set).toEqual("function");
    expect(typeof first.handleChange).toEqual("function");
    expect(typeof first.clear).toEqual("function");
    expect(first.label).toEqual({ props: { htmlFor: name } });
    expect(first.input).toEqual({
      props: { id: name, name },
    });
    expect(first.changed).toEqual(false);
    expect(first.unchanged).toEqual(true);
    expect(first.empty).toEqual(true);

    act(() => hook.result.current.set("abc"));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(undefined);
    expect(second.currentValue).toEqual("abc");
    expect(typeof second.set).toEqual("function");
    expect(typeof second.handleChange).toEqual("function");
    expect(typeof second.clear).toEqual("function");
    expect(second.label).toEqual({ props: { htmlFor: name } });
    expect(second.input).toEqual({
      props: { id: name, name },
    });
    expect(second.changed).toEqual(true);
    expect(second.unchanged).toEqual(false);
    expect(second.empty).toEqual(false);

    act(() => hook.result.current.clear());

    const third = hook.result.current;

    expect(third.defaultValue).toEqual(undefined);
    expect(third.currentValue).toEqual(undefined);
    expect(typeof third.set).toEqual("function");
    expect(typeof third.handleChange).toEqual("function");
    expect(typeof third.clear).toEqual("function");
    expect(third.label).toEqual({ props: { htmlFor: name } });
    expect(third.input).toEqual({
      props: { id: name, name },
    });
    expect(third.changed).toEqual(false);
    expect(third.unchanged).toEqual(true);
    expect(third.empty).toEqual(true);
  });

  test("clear restores non-empty default value", () => {
    const name = "search";
    const defaultValue = "abc";

    const changedCurrentValue = "def";

    const hook = renderHook(() => useQueryField({ name, defaultValue }));

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(defaultValue);
    expect(first.currentValue).toEqual(defaultValue);
    expect(typeof first.set).toEqual("function");
    expect(typeof first.handleChange).toEqual("function");
    expect(typeof first.clear).toEqual("function");
    expect(first.label).toEqual({ props: { htmlFor: name } });
    expect(first.input).toEqual({
      props: { id: name, name },
    });
    expect(first.changed).toEqual(false);
    expect(first.unchanged).toEqual(true);
    expect(first.empty).toEqual(false);

    act(() => hook.result.current.set(changedCurrentValue));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(defaultValue);
    expect(second.currentValue).toEqual(changedCurrentValue);
    expect(typeof second.set).toEqual("function");
    expect(typeof second.handleChange).toEqual("function");
    expect(typeof second.clear).toEqual("function");
    expect(second.label).toEqual({ props: { htmlFor: name } });
    expect(second.input).toEqual({
      props: { id: name, name },
    });
    expect(second.changed).toEqual(true);
    expect(second.unchanged).toEqual(false);
    expect(second.empty).toEqual(false);

    act(() => hook.result.current.clear());

    const third = hook.result.current;

    expect(third.defaultValue).toEqual(defaultValue);
    expect(third.currentValue).toEqual(defaultValue);
    expect(typeof third.set).toEqual("function");
    expect(typeof third.handleChange).toEqual("function");
    expect(typeof third.clear).toEqual("function");
    expect(third.label).toEqual({ props: { htmlFor: name } });
    expect(third.input).toEqual({
      props: { id: name, name },
    });
    expect(third.changed).toEqual(false);
    expect(third.unchanged).toEqual(true);
    expect(third.empty).toEqual(false);
  });
});
