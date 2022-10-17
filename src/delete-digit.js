const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayOfDigits = Array.from(String(n), Number);
  let maxNumber = Number(arrayOfDigits.slice(1).join(''));

  arrayOfDigits.forEach((el, index) => {
    let number = Number(arrayOfDigits.slice(0, index).join('') + arrayOfDigits.slice((index + 1)).join(''))
    if (number > maxNumber) {
      maxNumber = number;
    }
  });

  return maxNumber;
}

module.exports = {
  deleteDigit
};