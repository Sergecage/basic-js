const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
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
};
