function isPalindrome(str) {
  const reversedStr = [];

  str.split("").map((letter) => reversedStr.unshift(letter));
  return reversedStr.join("") === str;
}

module.exports = isPalindrome;
