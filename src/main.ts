// https://leetcode.com/problems/debounce/

type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let timerId: ReturnType<typeof setTimeout>;

  return function (...args) {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => fn(...args), t);
  };
}

const fn1 = debounce(console.log, 1000);

fn1(666);
fn1(777);
