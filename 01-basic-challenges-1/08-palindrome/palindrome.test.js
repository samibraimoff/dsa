const isPalindrome = require("./palindrome");

test("Checking for palindrome strings", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("Hello")).toBe(false);
  expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  expect(isPalindrome("12321")).toBe(true);
  expect(isPalindrome("kazak")).toBe(true);
  expect(isPalindrome("1234")).toBe(false);
  expect(isPalindrome("123a a321")).toBe(true);
  expect(isPalindrome("aaabbbaaa")).toBe(true);
});
