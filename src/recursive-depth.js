const CustomError = require("../extensions/custom-error");

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
};