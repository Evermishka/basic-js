const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  let sum = 0;
  let numberToString = number.toString(10);

  for (let digit of numberToString) {
    sum += +digit;    
  }
  while (sum > 9) {
      let sumToString = sum.toString(10);
      sum = 0;
      for (let digit of sumToString) {        
        sum += +digit;    
      }
  }
  
  return sum;
}

module.exports = {
  getSumOfDigits
};