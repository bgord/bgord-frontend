// biome-ignore lint: lint/complexity/noBannedTypes
type ExecFunctionListType = Function[];

export function exec(list: ExecFunctionListType) {
  return function () {
    for (const item of list) {
      item();
    }
  };
}
