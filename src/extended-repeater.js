const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let default_obj = {
    repeatTimes: 1, 
    separator: '+', 
    addition: '', 
    additionRepeatTimes: 1, 
    additionSeparator: '|'
  };
    if(Object.keys(options).length !== 5 ){
      let arr_key_d = Object.keys(default_obj);
      let arr_key_o = Object.keys(options);
      let arr_miss = [...arr_key_d, ...arr_key_o];
      arr_miss = arr_miss.filter(el => arr_miss.indexOf(el) === arr_miss.lastIndexOf(el));
      for (i in arr_miss){
           options[arr_miss[i]] = default_obj[arr_miss[i]] }
    }
    
    options.addition = options.addition + '';
    let addition = options.addition; 
    addition = Array(options.additionRepeatTimes).fill(addition).join(options.additionSeparator);
    
    str = str + addition;
    str = Array(options.repeatTimes).fill(str).join(options.separator);
    return str;
};
  
