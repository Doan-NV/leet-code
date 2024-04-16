/**
 * @param {string} s
 * @return {number}
 */
var solution = function (s) {
    let arr = [];
    let max = 0;
    if (s.length === 0) {
        return 0;
    }
    if (s.length === 1) {
        return 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (arr.includes(s[i])) {
            let index = arr.indexOf(s[i]);
            arr = arr.slice(index + 1);
            arr.push(s[i]);
        } else {
            arr.push(s[i]);
        }
        if (arr.length > max) {
            max = arr.length;
        }
    }
    return max;
};

let s = "abcabcbb";
console.log(solution(s)); // 3
s = "bbbbb";
console.log(solution(s)); // 1
s = "pwwkew";
console.log(solution(s)); // 3
s = "";
console.log(solution(s)); // 0
s = " ";
console.log(solution(s)); // 1
s = "au";
console.log(solution(s)); // 2
s = "dvdf";
console.log(solution(s)); // 3
s = "abba";
console.log(solution(s)); // 2
s = "aab";
console.log(solution(s)); // 2
s = "tmmzuxt";
console.log(solution(s)); // 5
s = "ohvhjdml";
console.log(solution(s)); // 6