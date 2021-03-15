const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(Array.isArray(arr)){ 
      return 1 + Math.max(0, ...arr.map(i => this.calculateDepth(i)));
      } else {
      return 0;
      }
  ;}
};


