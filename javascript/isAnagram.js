/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const x = {};
    for (let i = 0; i < s.length; i++) {
        if (x[s[i]]) {
            x[s[i]]++;
        } else {
            x[s[i]] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (x[t[i]]) {
            x[t[i]]--;
        } else {
            return false;
        }
    }
    return Object.values(x).every(v => v === 0);

    
};

console.log(isAnagram('anagram', 'nagaram')); // true