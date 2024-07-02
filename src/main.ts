// https://leetcode.com/problems/array-prototype-last/

interface Array<T> {
  last(): T | -1;
}

Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

console.log([1, 2, 3].last());
