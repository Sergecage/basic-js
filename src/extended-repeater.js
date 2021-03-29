const CustomError = require("../extensions/custom-error");

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
};
  