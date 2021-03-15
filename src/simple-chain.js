const CustomError = require("../extensions/custom-error");

const chainMaker = {
  list: [],
  getLength() {
    return this.list.length;
  },
  addLink(value) {
    value = String(value);
    this.list.push(`( ${value} )`);
    return this;
    
  },
  removeLink(position) {
    if(Number.isNaN(position)|| position > this.list.length || position < 0 || (!Number.isInteger(position))){
      this.list.splice(0,this.list.length);
      throw new Error;
    } else {
        this.list.splice(position-1,1);
        return this;
      }
  },
  reverseChain() {
    this.list.reverse();
    return this;
  },
  
  finishChain() {
    let result = this.list.join('~~');
    this.list.splice(0,this.list.length);
    return result;
  }
};


module.exports = chainMaker;
