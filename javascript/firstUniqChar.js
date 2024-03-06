
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hash = {};
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            hash[s[i]] ++;
        } else {
            hash[s[i]] = 1;
        }
    }
    console.log(hash);
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};
console.log(firstUniqChar('leetcode'));