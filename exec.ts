type ExecFunctionListType = Function[];

export function exec(list: ExecFunctionListType) {
  return function () {
    list.forEach((item) => item());
  };
}
