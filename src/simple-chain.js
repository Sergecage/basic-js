const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    total: [], 

  getLength() {

    return this.total.length
  },
  addLink(value) {
    if(value === undefined){
      this.total.push(" ")
    }else if(value === null) {
      this.total.push("null")
    } else {
      this.total.push(value)
    }
    return this
  },
  removeLink(position) {
    if (typeof position !== "number" || (position ^ 0) !== position || position > this.getLength() || position <= 0) {
      this.total = []
      throw new Error()
    } else {
      this.total.splice(position-1,1)
    }
    return this
  },
  reverseChain() {
    this.total.reverse()
    return this
  },
  finishChain() {
    let total = this.total
    this.total = []
    return `( ${total.join(' )~~( ')} )`
  }
}
module.exports = {
  chainMaker
};