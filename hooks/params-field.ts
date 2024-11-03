export type ParamsFieldValueType = string | undefined;
export type ParamsFieldInputValueType = string | undefined | null;

export class ParamsField {
  // Chose `undefined` here instead of `null`,
  // because HTML elements accept it as an empty value.
  static readonly emptyValue = undefined;

  static isEmpty(value: ParamsFieldInputValueType): boolean {
    return value === undefined || value === "" || value === null;
  }

  static compare(
    one: ParamsFieldValueType,
    another: ParamsFieldValueType,
  ): boolean {
    if (ParamsField.isEmpty(one) && ParamsField.isEmpty(another)) {
      return true;
    }
    return one === another;
  }

  private readonly value: ParamsFieldValueType = ParamsField.emptyValue;

  constructor(value: ParamsFieldInputValueType) {
    this.value = ParamsField.isEmpty(value)
      ? ParamsField.emptyValue
      : (value as ParamsFieldValueType);
  }

  get(): ParamsFieldValueType {
    return this.value;
  }

  isEmpty() {
    return ParamsField.isEmpty(this.value);
  }
}
