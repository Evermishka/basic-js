const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  function pushToResult(arr1, arr2) {
    if (arr1[0] === 1) {
      arr1 = arr1.slice(1);
    }
    arr2.push(arr1.join(''))
  }

  if (str) {
    let counter = [1, str[0]];
    for(i = 1; i < str.length; i++){          
      if (str[i] === str[i - 1]) {
        counter[0] += 1;
      } else {
        pushToResult(counter, result);
        counter = [1, str[i]];            
      }
    }
    pushToResult(counter, result);
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
