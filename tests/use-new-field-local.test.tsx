import { describe, test, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import { useNewField } from "../hooks/use-new-field";
import { Field } from "../hooks/field";

describe("useNewField - local", () => {
  test("empty default value", () => {
    const name = "search";

    const hook = renderHook(() => useNewField({ name }), {
      wrapper: createWrapper(),
    });

    const field = hook.result.current;

    expect(field.defaultValue).toEqual(Field.emptyValue);
    expect(field.currentValue).toEqual(Field.emptyValue);
    expect(field.value).toEqual("");
    expect(typeof field.set).toEqual("function");
    expect(typeof field.handleChange).toEqual("function");
    expect(typeof field.clear).toEqual("function");
    expect(field.label).toEqual({ props: { htmlFor: name } });
    expect(field.input).toEqual({ props: { id: name, name } });
    expect(field.changed).toEqual(false);
    expect(field.unchanged).toEqual(true);
    expect(field.empty).toEqual(true);
  });

  test("non-empty default value", async () => {
    const name = "search";
    const defaultValue = "abc";

    const hook = renderHook(() => useNewField({ name, defaultValue }), {
      wrapper: createWrapper(),
    });

    const field = hook.result.current;

    expect(field.defaultValue).toEqual(defaultValue);
    expect(field.currentValue).toEqual(defaultValue);
    expect(field.value).toEqual(defaultValue);
    expect(typeof field.set).toEqual("function");
    expect(typeof field.handleChange).toEqual("function");
    expect(typeof field.clear).toEqual("function");
    expect(field.label).toEqual({ props: { htmlFor: name } });
    expect(field.input).toEqual({ props: { id: name, name } });
    expect(field.changed).toEqual(false);
    expect(field.unchanged).toEqual(true);
    expect(field.empty).toEqual(false);
  });

  test("updated empty default value", () => {
    const name = "search";

    const changedValue = "abc";

    const hook = renderHook(() => useNewField({ name }), {
      wrapper: createWrapper(),
    });

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(Field.emptyValue);
    expect(first.currentValue).toEqual(Field.emptyValue);
    expect(first.value).toEqual("");
    expect(typeof first.set).toEqual("function");
    expect(typeof first.handleChange).toEqual("function");
    expect(typeof first.clear).toEqual("function");
    expect(first.label).toEqual({ props: { htmlFor: name } });
    expect(first.input).toEqual({ props: { id: name, name } });
    expect(first.changed).toEqual(false);
    expect(first.unchanged).toEqual(true);
    expect(first.empty).toEqual(true);

    act(() => hook.result.current.set(changedValue));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(Field.emptyValue);
    expect(second.currentValue).toEqual(changedValue);
    expect(second.value).toEqual(changedValue);
    expect(typeof second.set).toEqual("function");
    expect(typeof second.handleChange).toEqual("function");
    expect(typeof second.clear).toEqual("function");
    expect(second.label).toEqual({ props: { htmlFor: name } });
    expect(second.input).toEqual({ props: { id: name, name } });
    expect(second.changed).toEqual(true);
    expect(second.unchanged).toEqual(false);
    expect(second.empty).toEqual(false);
  });

  test("clear restores empty default value", () => {
    const name = "search";

    const changedValue = "abc";

    const hook = renderHook(() => useNewField({ name }), {
      wrapper: createWrapper(),
    });

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(Field.emptyValue);
    expect(first.currentValue).toEqual(Field.emptyValue);
    expect(first.value).toEqual("");
    expect(typeof first.set).toEqual("function");
    expect(typeof first.handleChange).toEqual("function");
    expect(typeof first.clear).toEqual("function");
    expect(first.label).toEqual({ props: { htmlFor: name } });
    expect(first.input).toEqual({ props: { id: name, name } });
    expect(first.changed).toEqual(false);
    expect(first.unchanged).toEqual(true);
    expect(first.empty).toEqual(true);

    act(() => hook.result.current.set(changedValue));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(Field.emptyValue);
    expect(second.currentValue).toEqual(changedValue);
    expect(second.value).toEqual(changedValue);
    expect(typeof second.set).toEqual("function");
    expect(typeof second.handleChange).toEqual("function");
    expect(typeof second.clear).toEqual("function");
    expect(second.label).toEqual({ props: { htmlFor: name } });
    expect(second.input).toEqual({ props: { id: name, name } });
    expect(second.changed).toEqual(true);
    expect(second.unchanged).toEqual(false);
    expect(second.empty).toEqual(false);

    act(() => hook.result.current.clear());

    const third = hook.result.current;

    expect(third.defaultValue).toEqual(Field.emptyValue);
    expect(third.currentValue).toEqual(Field.emptyValue);
    expect(third.value).toEqual("");
    expect(typeof third.set).toEqual("function");
    expect(typeof third.handleChange).toEqual("function");
    expect(typeof third.clear).toEqual("function");
    expect(third.label).toEqual({ props: { htmlFor: name } });
    expect(third.input).toEqual({ props: { id: name, name } });
    expect(third.changed).toEqual(false);
    expect(third.unchanged).toEqual(true);
    expect(third.empty).toEqual(true);
  });

  test("clear restores non-empty default value", () => {
    const name = "search";
    const defaultValue = "abc";

    const changedValue = "def";

    const hook = renderHook(() => useNewField({ name, defaultValue }), {
      wrapper: createWrapper(),
    });

    const first = hook.result.current;

    expect(first.defaultValue).toEqual(defaultValue);
    expect(first.currentValue).toEqual(defaultValue);
    expect(first.value).toEqual(defaultValue);
    expect(typeof first.set).toEqual("function");
    expect(typeof first.handleChange).toEqual("function");
    expect(typeof first.clear).toEqual("function");
    expect(first.label).toEqual({ props: { htmlFor: name } });
    expect(first.input).toEqual({ props: { id: name, name } });
    expect(first.changed).toEqual(false);
    expect(first.unchanged).toEqual(true);
    expect(first.empty).toEqual(false);

    act(() => hook.result.current.set(changedValue));

    const second = hook.result.current;

    expect(second.defaultValue).toEqual(defaultValue);
    expect(second.currentValue).toEqual(changedValue);
    expect(second.value).toEqual(changedValue);
    expect(typeof second.set).toEqual("function");
    expect(typeof second.handleChange).toEqual("function");
    expect(typeof second.clear).toEqual("function");
    expect(second.label).toEqual({ props: { htmlFor: name } });
    expect(second.input).toEqual({ props: { id: name, name } });
    expect(second.changed).toEqual(true);
    expect(second.unchanged).toEqual(false);
    expect(second.empty).toEqual(false);

    act(() => hook.result.current.clear());

    const third = hook.result.current;

    expect(third.defaultValue).toEqual(defaultValue);
    expect(third.currentValue).toEqual(defaultValue);
    expect(third.value).toEqual(defaultValue);
    expect(typeof third.set).toEqual("function");
    expect(typeof third.handleChange).toEqual("function");
    expect(typeof third.clear).toEqual("function");
    expect(third.label).toEqual({ props: { htmlFor: name } });
    expect(third.input).toEqual({ props: { id: name, name } });
    expect(third.changed).toEqual(false);
    expect(third.unchanged).toEqual(true);
    expect(third.empty).toEqual(false);
  });

  test("input field props - no default value", async () => {
    const name = "fullname";

    function Testcase() {
      const field = useNewField({ name });

      return (
        <form>
          <label {...field.label.props}>Fullname</label>
          <input
            type="text"
            value={field.value}
            onChange={field.handleChange}
            {...field.input.props}
          />
        </form>
      );
    }

    render(<Testcase />, { wrapper: createWrapper() });

    expect(screen.getByText("Fullname")).toHaveProperty("htmlFor", name);

    expect(screen.getByLabelText("Fullname")).toHaveProperty("id", name);
    expect(screen.getByLabelText("Fullname")).toHaveProperty("name", name);
    expect(screen.getByLabelText("Fullname")).toHaveValue("");
  });

  test("input field props - default value", async () => {
    const name = "fullname";
    const defaultValue = "John";

    function Testcase() {
      const field = useNewField({ name, defaultValue });

      return (
        <form>
          <label {...field.label.props}>Fullname</label>
          <input
            type="text"
            value={field.value}
            onChange={field.handleChange}
            {...field.input.props}
          />
        </form>
      );
    }

    render(<Testcase />, { wrapper: createWrapper() });

    expect(screen.getByText("Fullname")).toHaveProperty("htmlFor", name);

    expect(screen.getByLabelText("Fullname")).toHaveProperty("id", name);
    expect(screen.getByLabelText("Fullname")).toHaveProperty("name", name);
    expect(screen.getByLabelText("Fullname")).toHaveValue(defaultValue);
  });

  test("input field set", async () => {
    const name = "fullname";

    function Testcase() {
      const field = useNewField({ name });

      return (
        <form>
          <label {...field.label.props}>Fullname</label>
          <input
            type="text"
            value={field.value}
            onChange={field.handleChange}
            {...field.input.props}
          />
        </form>
      );
    }

    render(<Testcase />, { wrapper: createWrapper() });

    expect(screen.getByLabelText("Fullname")).toHaveValue("");

    await userEvent.type(screen.getByLabelText("Fullname"), "John Doe");

    expect(screen.getByLabelText("Fullname")).toHaveValue("John Doe");
  });

  test("input field clear", async () => {
    const user = userEvent.setup();
    const name = "fullname";

    function Testcase() {
      const field = useNewField({ name });

      return (
        <form>
          <label {...field.label.props}>Fullname</label>
          <input
            type="text"
            value={field.value}
            onChange={field.handleChange}
            {...field.input.props}
          />

          <button type="button" onClick={field.clear}>
            Clear
          </button>
        </form>
      );
    }

    render(<Testcase />, { wrapper: createWrapper() });

    expect(screen.getByLabelText("Fullname")).toHaveValue("");

    await userEvent.type(screen.getByLabelText("Fullname"), "John Doe");

    expect(screen.getByLabelText("Fullname")).toHaveValue("John Doe");

    await user.click(screen.getByText("Clear"));

    expect(screen.getByLabelText("Fullname")).toHaveValue("");
  });
});

function createWrapper() {
  // @ts-ignore
  return ({ children }) => (
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={children} />
      </Routes>
    </MemoryRouter>
  );
}
