function findMissingNumber(arr) {
  const n = Math.max(...arr);
  let sumOfTotal = (n * (n + 1)) / 2;
  let sumOfNumbers = 0;

  for (i = 0; i < arr.length; i++) {
    sumOfNumbers = sumOfNumbers + arr[i];
  }

  return sumOfTotal - sumOfNumbers;
}

module.exports = findMissingNumber;
