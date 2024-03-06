/**
 * @param {string} s
 * @return {boolean}
 */
const replaceString = (s, t) => {
    if(s == t) return true;
    let t1 = t.slice(0,s.length);
    if(t1 === s) {
        return replaceString(s, t.slice(s.length))
    } else {
        return false;
    }
}
// console.log(replaceString("123", "1231231234"));
// console.log(replaceString("123", "123123123"));

var repeatedSubstringPattern = function(s) {
    let x = false;
    if(s.length === 1) return true;
    for (let i = 1; i <= Math.ceil(s.length /2); i++) {
        x = replaceString(s.slice(0, i), s);
        if(x === true) {
            x = true;
            break;
        }
    }
    return x;

};
console.log(repeatedSubstringPattern("a"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("123123123"));
console.log(repeatedSubstringPattern("1231231234"));

