/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let token of tokens) {
        if (token === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (token === '-') {
            stack.push(-stack.pop() + stack.pop());
        } else if (token === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (token === '/') {
            stack.push(parseInt(1 / stack.pop() * stack.pop()));
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));