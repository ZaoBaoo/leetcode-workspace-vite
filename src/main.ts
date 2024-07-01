// https://leetcode.com/problems/add-two-promises/description/

type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  return Promise.all([promise1, promise2]).then((data) =>
    data.reduce((prev, next) => prev + next, 0),
  );
}
