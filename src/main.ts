// https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x: number): boolean {
  // const array: number[];

  if (x === 0) return true;
  if (x < 0) return false;

  const count = Math.floor(Math.log10(x) + 1);

  for (let i = count; count > 0; --i) {
    console.log(i);
  }

  console.log(count);
}

isPalindrome(123432);
