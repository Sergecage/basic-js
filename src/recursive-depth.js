const { NotImplementedError } = require('../extensions/index.js');


module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let recursion = 0
    let calculateDepth = 1
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        recursion = this.calculateDepth(arr[i]) + 1;
        if (recursion > calculateDepth) {
          calculateDepth = recursion;
        }
      }
    }
    return calculateDepth;
  }
}
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
