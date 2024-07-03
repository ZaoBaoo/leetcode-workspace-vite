// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/

function minimumOperations(nums: number[]): number {
  return nums.reduce((prev, next) => prev + (next % 3 && 1), 0);
}

console.log(minimumOperations([1, 2, 3, 4]));
