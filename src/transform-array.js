const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(Array.isArray(arr))) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const newArr = [];

  let current;
  let previous;
  let next;

  let discardCurrent = false;
  let discardNext = false;

  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    previous = (i === 0) ? null : arr[i - 1];
    next = (i != (arr.length - 1)) ? arr[i + 1] : null;

    if (arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev') {
      if (discardNext) {
        discardNext = false;
        discardCurrent = true;
      } else {
        discardCurrent = false;
        newArr.push(current);
      }      
    } else {
      switch (arr[i]) {
        case '--discard-next':
          if (next) {
            discardNext = true;
          } 
          break;
        case '--discard-prev':
          if (previous) {
            if (discardCurrent) {
              discardCurrent = false;
            } else {
              newArr.pop();
            }
          }
          break;
        case '--double-next':
          if (next) {
            newArr.push(next);
          }
          break;
        case '--double-prev':
          if (previous) {
            if (discardCurrent) {
              discardCurrent = false;
            } else {
              newArr.push(previous);
            }
          }
          break;
      }
    }    
  }
  return newArr;
}

module.exports = {
  transform
};

console.log(transform([1, 2, 3]));