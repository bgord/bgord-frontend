export type FieldValueType = string | undefined;
export type FieldInputValueType = string | undefined | null;

export class Field {
  // Chose `undefined` here instead of `null`,
  // because HTML elements accept it as an empty value.
  static readonly emptyValue = undefined;

  static isEmpty(value: FieldInputValueType): boolean {
    return value === undefined || value === "" || value === null;
  }

  static compare(one: FieldValueType, another: FieldValueType): boolean {
    if (Field.isEmpty(one) && Field.isEmpty(another)) {
      return true;
    }
    return one === another;
  }

  private readonly value: FieldValueType = Field.emptyValue;

  constructor(value: FieldInputValueType) {
    this.value = Field.isEmpty(value)
      ? Field.emptyValue
      : (value as FieldValueType);
  }

  get(): FieldValueType {
    return this.value;
  }

  isEmpty() {
    return Field.isEmpty(this.value);
  }
}
