/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for(let i =0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            let last = stack.pop();
            if(last !== map[s[i]]) {
                return false;
            }
        }
    }
    if(stack.length > 0) {
        return false;
    }
    return true;
};
let  s = "()[]{}";

console.log(isValid(s)); // true