import React from "react";
import { describe, test, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSearchParams, MemoryRouter, Routes, Route } from "react-router-dom";
import { useParamsField } from "../hooks/use-params-field";
import { ParamsField } from "../hooks/params-field";

describe("useParamsField", () => {
  test("empty default value", () => {
    const name = "search";

    let params = null as unknown as URLSearchParams;
    const hook = renderHook(() => useParamsField({ name }), {
      wrapper: createWrapper((value) => {
        params = value;
      }),
    });

    const field = hook.result.current;

    expect(field.defaultValue).toEqual(ParamsField.emptyValue);
    expect(field.currentValue).toEqual(ParamsField.emptyValue);
    expect(field.value).toEqual("");
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

    expect(params.get(name)).toEqual(null);
  });

  test("non-empty default value", async () => {
    const name = "search";
    const defaultValue = "abc";

    let params = null as unknown as URLSearchParams;

    const hook = renderHook(() => useParamsField({ name, defaultValue }), {
      wrapper: createWrapper((value) => {
        params = value;
      }),
    });

    const field = hook.result.current;

    expect(field.defaultValue).toEqual(defaultValue);
    expect(field.currentValue).toEqual(defaultValue);
    expect(field.value).toEqual(defaultValue);
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

    expect(params.get(name)).toBe(defaultValue);
  });

  test("updated empty default value", () => {
    const name = "search";

    const changedValue = "abc";

    let params = null as unknown as URLSearchParams;

    const hook = renderHook(() => useParamsField({ name }), {
      wrapper: createWrapper((value) => {
        params = value;
      }),
    });

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(ParamsField.emptyValue);
    expect(first.currentValue).toEqual(ParamsField.emptyValue);
    expect(first.value).toEqual("");
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

    expect(params.get(name)).toEqual(null);

    act(() => hook.result.current.set(changedValue));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(ParamsField.emptyValue);
    expect(second.currentValue).toEqual(changedValue);
    expect(second.value).toEqual(changedValue);
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

    const hook = renderHook(() => useParamsField({ name }), {
      wrapper: createWrapper((value) => {
        params = value;
      }),
    });

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(ParamsField.emptyValue);
    expect(first.currentValue).toEqual(ParamsField.emptyValue);
    expect(first.value).toEqual("");
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

    expect(params.get(name)).toEqual(null);

    act(() => hook.result.current.set(changedValue));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(ParamsField.emptyValue);
    expect(second.currentValue).toEqual(changedValue);
    expect(second.value).toEqual(changedValue);
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

    expect(third.defaultValue).toEqual(ParamsField.emptyValue);
    expect(third.currentValue).toEqual(ParamsField.emptyValue);
    expect(third.value).toEqual("");
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

    expect(params.get(name)).toEqual(null);
  });

  test("clear restores non-empty default value", () => {
    const name = "search";
    const defaultValue = "abc";

    const changedValue = "def";

    let params = null as unknown as URLSearchParams;

    const hook = renderHook(() => useParamsField({ name, defaultValue }), {
      wrapper: createWrapper((value) => {
        params = value;
      }),
    });

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(defaultValue);
    expect(first.currentValue).toEqual(defaultValue);
    expect(first.value).toEqual(defaultValue);
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
    expect(second.value).toEqual(changedValue);
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
    expect(third.value).toEqual(defaultValue);
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

  test("removes param when set to an empty string - empty default value", () => {
    const name = "search";

    const changedValue = "abc";

    let params = null as unknown as URLSearchParams;

    const hook = renderHook(() => useParamsField({ name }), {
      wrapper: createWrapper((value) => {
        params = value;
      }),
    });

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(ParamsField.emptyValue);
    expect(first.currentValue).toEqual(ParamsField.emptyValue);
    expect(first.value).toEqual("");
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

    expect(params.get(name)).toEqual(null);

    act(() => hook.result.current.set(changedValue));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(ParamsField.emptyValue);
    expect(second.currentValue).toEqual(changedValue);
    expect(second.value).toEqual(changedValue);
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

    act(() => hook.result.current.set(""));

    const third = hook.result.current;

    expect(third.defaultValue).toEqual(ParamsField.emptyValue);
    expect(third.currentValue).toEqual(ParamsField.emptyValue);
    expect(third.value).toEqual("");
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

    expect(params.get(name)).toEqual(null);
  });

  test("removes param when set to undefined - empty default value", () => {
    const name = "search";

    const changedValue = "abc";

    let params = null as unknown as URLSearchParams;

    const hook = renderHook(() => useParamsField({ name }), {
      wrapper: createWrapper((value) => {
        params = value;
      }),
    });

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(ParamsField.emptyValue);
    expect(first.currentValue).toEqual(ParamsField.emptyValue);
    expect(first.value).toEqual("");
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

    expect(params.get(name)).toEqual(null);

    act(() => hook.result.current.set(changedValue));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(ParamsField.emptyValue);
    expect(second.currentValue).toEqual(changedValue);
    expect(second.value).toEqual(changedValue);
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

    act(() => hook.result.current.set(undefined));

    const third = hook.result.current;

    expect(third.defaultValue).toEqual(ParamsField.emptyValue);
    expect(third.currentValue).toEqual(ParamsField.emptyValue);
    expect(third.value).toEqual("");
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

    expect(params.get(name)).toEqual(null);
  });

  test("removes param when set to null - empty default value", () => {
    const name = "search";

    const changedValue = "abc";

    let params = null as unknown as URLSearchParams;

    const hook = renderHook(() => useParamsField({ name }), {
      wrapper: createWrapper((value) => {
        params = value;
      }),
    });

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(ParamsField.emptyValue);
    expect(first.currentValue).toEqual(ParamsField.emptyValue);
    expect(first.value).toEqual("");
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

    expect(params.get(name)).toEqual(null);

    act(() => hook.result.current.set(changedValue));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(ParamsField.emptyValue);
    expect(second.currentValue).toEqual(changedValue);
    expect(second.value).toEqual(changedValue);
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

    // @ts-expect-error
    act(() => hook.result.current.set(null));

    const third = hook.result.current;

    expect(third.defaultValue).toEqual(ParamsField.emptyValue);
    expect(third.currentValue).toEqual(ParamsField.emptyValue);
    expect(third.value).toEqual("");
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

    expect(params.get(name)).toEqual(null);
  });

  test("given value exists - empty default", () => {
    const name = "search";

    const givenValue = "abc";

    let params = null as unknown as URLSearchParams;
    const hook = renderHook(() => useParamsField({ name }), {
      wrapper: createWrapper(
        (value) => {
          params = value;
        },
        [`/?${name}=${givenValue}`]
      ),
    });

    const field = hook.result.current;

    expect(field.defaultValue).toEqual(ParamsField.emptyValue);
    expect(field.currentValue).toEqual(givenValue);
    expect(field.value).toEqual(givenValue);
    expect(typeof field.set).toEqual("function");
    expect(typeof field.handleChange).toEqual("function");
    expect(typeof field.clear).toEqual("function");
    expect(field.label).toEqual({ props: { htmlFor: name } });
    expect(field.input).toEqual({
      props: { id: name, name },
    });
    expect(field.changed).toEqual(true);
    expect(field.unchanged).toEqual(false);
    expect(field.empty).toEqual(false);

    expect(params.get(name)).toEqual(givenValue);
  });

  test("given value exists - non-empty default", () => {
    const name = "search";

    const defaultValue = "abc";
    const givenValue = "def";

    let params = null as unknown as URLSearchParams;
    const hook = renderHook(() => useParamsField({ name, defaultValue }), {
      wrapper: createWrapper(
        (value) => {
          params = value;
        },
        [`/?${name}=${givenValue}`]
      ),
    });

    const field = hook.result.current;

    expect(field.defaultValue).toEqual(defaultValue);
    expect(field.currentValue).toEqual(givenValue);
    expect(field.value).toEqual(givenValue);
    expect(typeof field.set).toEqual("function");
    expect(typeof field.handleChange).toEqual("function");
    expect(typeof field.clear).toEqual("function");
    expect(field.label).toEqual({ props: { htmlFor: name } });
    expect(field.input).toEqual({
      props: { id: name, name },
    });
    expect(field.changed).toEqual(true);
    expect(field.unchanged).toEqual(false);
    expect(field.empty).toEqual(false);

    expect(params.get(name)).toEqual(givenValue);
  });

  test("clears given value empty string - empty default", () => {
    const name = "search";

    const givenValue = "";

    let params = null as unknown as URLSearchParams;
    const hook = renderHook(() => useParamsField({ name }), {
      wrapper: createWrapper(
        (value) => {
          params = value;
        },
        [`/?${name}=${givenValue}`]
      ),
    });

    const field = hook.result.current;

    expect(field.defaultValue).toEqual(ParamsField.emptyValue);
    expect(field.currentValue).toEqual(ParamsField.emptyValue);
    expect(field.value).toEqual("");
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

    expect(params.get(name)).toEqual(null);
    expect(params.toString()).toEqual("");
  });

  test("clears given value empty - empty default", () => {
    const name = "search";

    let params = null as unknown as URLSearchParams;
    const hook = renderHook(() => useParamsField({ name }), {
      wrapper: createWrapper(
        (value) => {
          params = value;
        },
        [`/?${name}=`]
      ),
    });

    const field = hook.result.current;

    expect(field.defaultValue).toEqual(ParamsField.emptyValue);
    expect(field.currentValue).toEqual(ParamsField.emptyValue);
    expect(field.value).toEqual("");
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

    expect(params.get(name)).toEqual(null);
    expect(params.toString()).toEqual("");
  });

  test("given value exists - clear restores default value", () => {
    const name = "search";

    const defaultValue = "abc";
    const givenValue = "def";

    let params = null as unknown as URLSearchParams;
    const hook = renderHook(() => useParamsField({ name, defaultValue }), {
      wrapper: createWrapper(
        (value) => {
          params = value;
        },
        [`/?${name}=${givenValue}`]
      ),
    });

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(defaultValue);
    expect(first.currentValue).toEqual(givenValue);
    expect(first.value).toEqual(givenValue);
    expect(typeof first.set).toEqual("function");
    expect(typeof first.handleChange).toEqual("function");
    expect(typeof first.clear).toEqual("function");
    expect(first.label).toEqual({ props: { htmlFor: name } });
    expect(first.input).toEqual({
      props: { id: name, name },
    });
    expect(first.changed).toEqual(true);
    expect(first.unchanged).toEqual(false);
    expect(first.empty).toEqual(false);

    expect(params.get(name)).toEqual(givenValue);

    act(() => hook.result.current.clear());

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(defaultValue);
    expect(second.currentValue).toEqual(defaultValue);
    expect(second.value).toEqual(defaultValue);
    expect(typeof second.set).toEqual("function");
    expect(typeof second.handleChange).toEqual("function");
    expect(typeof second.clear).toEqual("function");
    expect(second.label).toEqual({ props: { htmlFor: name } });
    expect(second.input).toEqual({
      props: { id: name, name },
    });
    expect(second.changed).toEqual(false);
    expect(second.unchanged).toEqual(true);
    expect(second.empty).toEqual(false);

    expect(params.get(name)).toEqual(defaultValue);
  });

  test("does not interfere with other params", () => {
    const name = "search";

    const defaultValue = "abc";
    const givenValue = "def";

    let params = null as unknown as URLSearchParams;
    const hook = renderHook(() => useParamsField({ name, defaultValue }), {
      wrapper: createWrapper(
        (value) => {
          params = value;
        },
        [`/?${name}=${givenValue}&another=value`]
      ),
    });

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(defaultValue);
    expect(first.currentValue).toEqual(givenValue);
    expect(first.value).toEqual(givenValue);
    expect(typeof first.set).toEqual("function");
    expect(typeof first.handleChange).toEqual("function");
    expect(typeof first.clear).toEqual("function");
    expect(first.label).toEqual({ props: { htmlFor: name } });
    expect(first.input).toEqual({
      props: { id: name, name },
    });
    expect(first.changed).toEqual(true);
    expect(first.unchanged).toEqual(false);
    expect(first.empty).toEqual(false);

    expect(params.get(name)).toEqual(givenValue);
    expect(params.get("another")).toEqual("value");

    act(() => hook.result.current.clear());

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(defaultValue);
    expect(second.currentValue).toEqual(defaultValue);
    expect(second.value).toEqual(defaultValue);
    expect(typeof second.set).toEqual("function");
    expect(typeof second.handleChange).toEqual("function");
    expect(typeof second.clear).toEqual("function");
    expect(second.label).toEqual({ props: { htmlFor: name } });
    expect(second.input).toEqual({
      props: { id: name, name },
    });
    expect(second.changed).toEqual(false);
    expect(second.unchanged).toEqual(true);
    expect(second.empty).toEqual(false);

    expect(params.get(name)).toEqual(defaultValue);
    expect(params.get("another")).toEqual("value");
  });

  test.todo("input field set");
  test.todo("input field clear");
  test.todo("input field handleChange");
});

function ParamsMonitor(props: { onChange: (value: URLSearchParams) => void }) {
  const [params] = useSearchParams();
  props.onChange(params);
  return null;
}

function createWrapper(
  onChange: (value: URLSearchParams) => void,
  initialEntries = ["/"]
) {
  return ({ children }) => (
    <MemoryRouter initialEntries={initialEntries}>
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
