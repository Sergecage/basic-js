const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
  const ratio = typeof(sample) === 'string' ? Number(sample): -1;

  let result = ratio <= 0 || ratio > 100 || isNaN(ratio) ? false :
    (ratio ^ 0) === ratio ? (Math.floor((Math.log(MODERN_ACTIVITY/ratio))/(0.693/HALF_LIFE_PERIOD))+1) :
      Math.floor((Math.log(MODERN_ACTIVITY/ratio)/(0.693/HALF_LIFE_PERIOD)))+1;

  result = result >= 0 ? result : false;
  return result;
};
