/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const hash1 = {};
    const hash2 = {};
    if (s.length !== t.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        if (hash1[s[i]] === undefined) {
            hash1[s[i]] = t[i];
        } else if (hash1[s[i]] !== t[i]) {
            return false;
        }
        if (hash2[t[i]] === undefined) {
            hash2[t[i]] = s[i];
        } else if (hash2[t[i]] !== s[i]) {
            return false;
        }
    }

    return true;
};