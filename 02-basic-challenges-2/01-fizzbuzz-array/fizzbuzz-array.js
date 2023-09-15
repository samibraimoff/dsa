function fizzBuzzArray(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    const str =
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i;

    arr.push(str);
  }
  return arr;
}

module.exports = fizzBuzzArray;
