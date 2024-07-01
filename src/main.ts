// https://leetcode.com/problems/to-lower-case/description/

function toLowerCase(s: string): string {
  const strSplit = s.split("");
  const arrChars = strSplit.map((char) => char.charCodeAt(0));
  const isUpper = (code: number) => code >= 65 && code <= 90;
  const toLower = (code: number) => String.fromCharCode(code);

  return arrChars.reduce(
    (prev, next) =>
      (prev += isUpper(next) ? toLower(next + 32) : toLower(next)),
    "",
  );
}

toLowerCase("Hello");
