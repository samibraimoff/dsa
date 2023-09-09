function reverseString(str) {
  let reversedString = [];
  str.split("").map((letter) => reversedString.unshift(letter));
  return reversedString.join("");
}

module.exports = reverseString;
