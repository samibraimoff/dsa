function countVowels(str) {
  //   const vowels = ["a", "e", "i", "o", "u"];
  let countVowels = 0;
  const formattedStr = str.toLowerCase();

  for (let i = 0; i < formattedStr.length; i++) {
    let char = formattedStr[i];

    if (
      char === "a" ||
      char === "i" ||
      char === "o" ||
      char === "e" ||
      char === "u"
    ) {
      countVowels++;
    }
  }

  return countVowels;
}

module.exports = countVowels;
