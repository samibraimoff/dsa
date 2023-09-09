function countOccurrences(string, char) {
  let count = 0;
  for (let letter of string) {
    if (letter === char) {
      count++;
    } else count;
  }
  return count;
}

module.exports = countOccurrences;
