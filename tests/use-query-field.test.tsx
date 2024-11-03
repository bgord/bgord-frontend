import React from "react";
import { describe, test, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSearchParams, MemoryRouter, Routes, Route } from "react-router-dom";
import { useQueryField, QueryField } from "../hooks/use-query-field";

describe("useQueryField", () => {
  test("empty default value", () => {
    const name = "search";

    let params = null as unknown as URLSearchParams;
    const hook = renderHook(() => useQueryField({ name }), {
      wrapper: createWrapper((value) => {
        params = value;
      }),
    });

    const field = hook.result.current;

    expect(field.defaultValue).toEqual(QueryField.emptyValue);
    expect(field.currentValue).toEqual(QueryField.emptyValue);
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

    expect(params?.get(name)).toEqual(QueryField.emptyValue);
  });

  test("non-empty default value", async () => {
    const name = "search";
    const defaultValue = "abc";

    let params = null as unknown as URLSearchParams;

    const hook = renderHook(() => useQueryField({ name, defaultValue }), {
      wrapper: createWrapper((value) => {
        params = value;
      }),
    });

    const field = hook.result.current;

    expect(field.defaultValue).toEqual(defaultValue);
    expect(field.currentValue).toEqual(defaultValue);
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

    expect(params?.get(name)).toBe(defaultValue);
  });

  test("updated empty default value", () => {
    const name = "search";

    const changedValue = "abc";

    let params = null as unknown as URLSearchParams;

    const hook = renderHook(() => useQueryField({ name }), {
      wrapper: createWrapper((value) => {
        params = value;
      }),
    });

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(QueryField.emptyValue);
    expect(first.currentValue).toEqual(QueryField.emptyValue);
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

    expect(params.get(name)).toEqual(QueryField.emptyValue);

    act(() => hook.result.current.set(changedValue));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(QueryField.emptyValue);
    expect(second.currentValue).toEqual(changedValue);
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

    expect(params.get(name)).toEqual(changedValue);
  });

  test("clear restores empty default value", () => {
    const name = "search";

    const changedValue = "abc";

    let params = null as unknown as URLSearchParams;

    const hook = renderHook(() => useQueryField({ name }), {
      wrapper: createWrapper((value) => {
        params = value;
      }),
    });

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(QueryField.emptyValue);
    expect(first.currentValue).toEqual(QueryField.emptyValue);
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

    expect(params.get(name)).toEqual(QueryField.emptyValue);

    act(() => hook.result.current.set(changedValue));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(QueryField.emptyValue);
    expect(second.currentValue).toEqual(changedValue);
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

    expect(params.get(name)).toEqual(changedValue);

    act(() => hook.result.current.clear());

    const third = hook.result.current;

    expect(third.defaultValue).toEqual(QueryField.emptyValue);
    expect(third.currentValue).toEqual(QueryField.emptyValue);
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

    expect(params.get(name)).toEqual(QueryField.emptyValue);
  });

  test("clear restores non-empty default value", () => {
    const name = "search";
    const defaultValue = "abc";

    const changedValue = "def";

    let params = null as unknown as URLSearchParams;

    const hook = renderHook(() => useQueryField({ name, defaultValue }), {
      wrapper: createWrapper((value) => {
        params = value;
      }),
    });

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

    expect(params.get(name)).toEqual(defaultValue);

    act(() => hook.result.current.set(changedValue));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(defaultValue);
    expect(second.currentValue).toEqual(changedValue);
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

    expect(params.get(name)).toEqual(changedValue);

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

    expect(params.get(name)).toEqual(defaultValue);
  });
});

function ParamsMonitor(props: { onChange: (value: URLSearchParams) => void }) {
  const [params] = useSearchParams();
  props.onChange(params);
  return null;
}

function createWrapper(onChange: (value: URLSearchParams) => void) {
  return ({ children }) => (
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {children}
              <ParamsMonitor onChange={onChange} />
            </>
          }
        />
      </Routes>
    </MemoryRouter>
  );
}
