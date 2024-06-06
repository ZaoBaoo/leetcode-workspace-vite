// https://leetcode.com/problems/find-common-characters/description/

function commonChars(words: string[]): string[] {
  const wordsSplit = words.map((item) => item.split(""));

  return wordsSplit.reduce((acc, current) => {
    const newArray = [];
    for (let char of current) {
      if (acc.includes(char)) {
        newArray.push(char);
        const index = acc.findIndex((elem) => elem === char);
        delete acc[index];
      }
    }
    return newArray;
  }, wordsSplit[0]);
}

commonChars(["bella", "label", "roller"]);
