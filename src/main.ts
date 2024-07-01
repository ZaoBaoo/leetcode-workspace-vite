// https://leetcode.com/problems/score-of-a-string/

function scoreOfString(s: string): number {
  const getCharCode = (char: string) => char.charCodeAt(0);
  const arrNumber: number[] = [];

  for (let i = 0; i < s.length - 1; i++) {
    const startLine = getCharCode(s[i]);
    const endLine = getCharCode(s[i + 1]);
    arrNumber.push(startLine - endLine);
  }

  return arrNumber.map(Math.abs).reduce((prev, next) => prev + next, 0);
}

scoreOfString("zaz");
