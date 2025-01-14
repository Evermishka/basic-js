const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth (arr) {
    let depthMax = 1;
    if (!(Array.isArray(arr))) {
      return 0;
    } else {
      arr.forEach(el => {
        let depth = 1;
        depth += this.calculateDepth(el);
        if (depth > depthMax) depthMax = depth;
      });
      return depthMax;
    }
  }
}

module.exports = {
  DepthCalculator
};
