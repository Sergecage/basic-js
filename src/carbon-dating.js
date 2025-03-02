const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


function dateSample(sample) {
  const ratio = typeof(sample) === 'string' ? Number(sample): -1;

  let result = ratio <= 0 || ratio > 100 || isNaN(ratio) ? false :
    (ratio ^ 0) === ratio ? (Math.floor((Math.log(MODERN_ACTIVITY/ratio))/(0.693/HALF_LIFE_PERIOD))+1) :
      Math.floor((Math.log(MODERN_ACTIVITY/ratio)/(0.693/HALF_LIFE_PERIOD)))+1;

  result = result >= 0 ? result : false;
  return result;
}
/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
module.exports = {
  dateSample
};