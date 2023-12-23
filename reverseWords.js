/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const t = s.split(' ').map(item => item.split('').reverse().join('')).join(' ');
    return t;
};

const s = "Let's take LeetCode contest";
console.log(reverseWords(s))