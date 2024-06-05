function commonChars(words: string[]): string[] {
  let obj: Record<string, boolean> = {};

  for (const char of words[0]) {
    obj[char] = true;
  }

  const wordsSplit = words.map((item) => item.split(""));

  wordsSplit.forEach((word) => {
    let newObj: Record<string, boolean> = {};

    word.forEach((letter) => {
      console.log(word);
    });
  });

  console.log(obj);
}

commonChars(["bella", "label", "roller"]);
