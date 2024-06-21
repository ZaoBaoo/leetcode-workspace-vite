// https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  const arr: number[] = [];

  let length = Math.floor(Math.log10(x) + 1);

  let cof = 10;

  for (let i = 10; length > 0; i *= cof) {
    const num = Math.floor(x % i) | 0;
    arr.push(num);
    length--;
  }

  console.log(arr);
}

isPalindrome(123);
