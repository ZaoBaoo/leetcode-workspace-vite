// https://leetcode.com/problems/timeout-cancellation/description/

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  let timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  function cancelFn() {
    clearTimeout(timeoutId);
  }

  return cancelFn;
}
