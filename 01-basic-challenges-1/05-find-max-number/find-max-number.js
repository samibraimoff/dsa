function findMaxNumber(array) {
  let maxNumber = 0;
  for (let number of array) {
    if (number > maxNumber) {
      maxNumber = number;
    }
  }
  return maxNumber;
}

module.exports = findMaxNumber;
