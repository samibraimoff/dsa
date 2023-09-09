function titleCase(str) {
  let firstLetter;
  let lastLetters;
  return str
    .split(" ")
    .map((word) => {
      firstLetter = word.charAt(0).toUpperCase();
      lastLetters = word.slice(1, word.length).toLowerCase();
      return firstLetter + lastLetters;
    })
    .join(" ");
}

module.exports = titleCase;
