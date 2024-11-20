/**
 * Function composition utility
 * @module Exec
 */

type ExecFunctionListType = Array<() => void>;

/**
 * Composes multiple functions into single execution unit
 * @param list - Array of functions to execute
 * @returns Composed function that executes all functions in sequence
 * @throws {TypeError} If list contains non-function items
 */
export function exec(list: ExecFunctionListType) {
  return function () {
    for (const item of list) {
      item();
    }
  };
}
