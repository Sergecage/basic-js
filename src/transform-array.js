const { NotImplementedError } = require('../extensions/index.js');


module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    return error
  }else{
    let result = []

    arr.forEach((e,i) => {
      if(e === '--double-next'){
        result.push(arr[i+1])
      } else if(e === '--double-prev'){
        result.push(result[result.length-1]);
      } else if(arr[i+1] === '--discard-prev'){
        result.push(undefined)
      } else if(arr[i-1] === '--discard-next'){
        result.push(undefined)
      } else {
        result.push(e)
      }
    })

    return result.filter(element => {
        if(element !== '--discard-prev' && element !== '--discard-next' && element !== undefined){
          return true;
        }else{
          return false;
        }
      })
  }
}
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

