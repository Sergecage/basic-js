const { NotImplementedError } = require('../extensions/index.js');

module.exports = function repeater(str, options) {
  let separator = '+';
  if (options.separator !== undefined) separator = options.separator
  
  let repeatTimes = 1;
  if (options.repeatTimes !== undefined) repeatTimes = options.repeatTimes

  let total = ''
  let additionSeparator = '|'
  let additionRepeatTimes = 1
  let  str2 = ''

  if (options.addition !== undefined) {
    if (options.additionSeparator !== undefined) additionSeparator = options.additionSeparator;
    if (options.additionRepeatTimes !== undefined) additionRepeatTimes = options.additionRepeatTimes;

    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i === additionRepeatTimes - 1) str2 += options.addition;
      else str2 += (options.addition + additionSeparator);
    }
  }
  for (let i = 0; i < repeatTimes; i++) {
    if (i === repeatTimes - 1) total += (str + str2);
    else total += (str + str2 + separator);
  }
  return total;
}

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
