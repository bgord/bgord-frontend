import React from "react";
import { FieldState, extractUseField } from "../hooks/use-field";

export function Switch(
  props: FieldState<boolean> &
    Omit<JSX.IntrinsicElements["input"], "label" | "value">
) {
  const { field, rest } = extractUseField<
    boolean,
    Omit<JSX.IntrinsicElements["input"], "label" | "value">
  >(props);

  return (
    <>
      <input
        className="c-switch-checkbox c-visually-hidden"
        type="checkbox"
        checked={field.value}
        onChange={(event) => field.set(event.currentTarget.checked)}
        {...field.input.props}
        {...rest}
      />

      <label className="c-switch-label" {...field.label.props}>
        <div className="c-switch-slider" />
      </label>
    </>
  );
}
