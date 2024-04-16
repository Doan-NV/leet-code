/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        let top = stack[stack.length - 1];
        if (stack.length > 0 && Math.abs(top.charCodeAt() - c.charCodeAt()) === 32) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.join('');
};
let s = 'leEeetcode';
console.log(makeGood(s)); // ''
s = "abBAcC"
console.log(makeGood(s)); // ''
s = "s"
console.log(makeGood(s)); // 's'
s = "Pp"
console.log(makeGood(s)); // ''