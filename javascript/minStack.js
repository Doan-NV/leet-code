
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
    this.min = Number.MAX_VALUE;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    this.min = Math.min(this.min, val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min = Math.min(...this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack([]);
obj.push(-2);
obj.push(0);
obj.push(-3);
obj.getMin()
obj.top()
obj.pop()
console.log("🚀 ~ obj:", obj)
var param_3 = obj.top()
console.log("🚀 ~ param_3:", param_3)
var param_4 = obj.getMin()
console.log("🚀 ~ param_4:", param_4)
