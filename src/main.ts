// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
  let slice: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const firstNumber = nums[i];

    if (firstNumber === target) {
    }

    for (let index = i + 1; index < nums.length; index++) {
      const sum = firstNumber + nums[index];
      if (sum === target) {
        slice = [i, index];
        break;
      }
    }
  }

  return slice;
}

twoSum([2, 7, 11, 15], 9);
