export type FieldValueAllowedTypes = string | undefined;
export type FieldInputValueType<T extends FieldValueAllowedTypes> = T | null;

export class Field<T extends FieldValueAllowedTypes> {
  // Chose `undefined` here instead of `null`,
  // because HTML elements accept it as an empty value.
  static readonly emptyValue = undefined;

  static isEmpty(value: FieldInputValueType<FieldValueAllowedTypes>): boolean {
    return value === undefined || value === "" || value === null;
  }

  static compare(
    one: FieldValueAllowedTypes,
    another: FieldValueAllowedTypes,
  ): boolean {
    if (Field.isEmpty(one) && Field.isEmpty(another)) {
      return true;
    }
    return one === another;
  }

  private readonly value: T = Field.emptyValue as T;

  constructor(value: FieldInputValueType<T>) {
    this.value = Field.isEmpty(value) ? (Field.emptyValue as T) : (value as T);
  }

  get(): T {
    return this.value;
  }

  isEmpty() {
    return Field.isEmpty(this.value);
  }
}
