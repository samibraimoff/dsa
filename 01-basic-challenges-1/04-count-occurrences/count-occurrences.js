function countOccurrences(string, char) {
  let count = 0;
  for (let letter of string) {
    if (letter === char) {
      count++;
    }
  }
  return count;
}

module.exports = countOccurrences;
