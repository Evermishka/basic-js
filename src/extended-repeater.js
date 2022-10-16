const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {  
  const repeatOptions = {
    repeatTimes: (typeof options.repeatTimes == "undefined") ?  1 : options.repeatTimes,
    separator: (typeof options.separator == "undefined") ?  '+' : options.separator,
    addition: (typeof options.addition == "undefined") ?  '' : options.addition,
    additionRepeatTimes: (typeof options.additionRepeatTimes == "undefined") ?  1 : options.additionRepeatTimes,
    additionSeparator: (typeof options.additionSeparator == "undefined") ?  '|' : options.additionSeparator,
  }

  function makeString (str, counter, separator) {
    const result = [];
    if (Number.isInteger(counter)) {
      for (let i = 0; i < counter; i++) {
        result.push(str);
      }
      return result.join(separator);
    } else {
      return str;
    }    
  }

  if (typeof str !== 'string') str = String(str);
  if (typeof repeatOptions.addition !== 'string') repeatOptions.addition = String(repeatOptions.addition);  

  const resultAddition = makeString (repeatOptions.addition, repeatOptions.additionRepeatTimes, repeatOptions.additionSeparator);
  const resultRepeated = str + resultAddition;
  const result = makeString (resultRepeated, repeatOptions.repeatTimes, repeatOptions.separator);

  return result;
}

module.exports = {
  repeater
};
