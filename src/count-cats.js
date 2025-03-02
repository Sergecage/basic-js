const { NotImplementedError } = require('../extensions/index.js');


function countCats(matrix) {
  let arr = []
  let allSearch = matrix.toString().split(",")
for (let i = 0; i < allSearch.length; i++) {
  if( allSearch[i]=== '^^'){
    arr.push(allSearch[i])
  }
}
if(!arr.length){
  return 0
}else{
  return arr.length
}
}

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
module.exports = {
  countCats
};