/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        const element = s[i];

        if (obj[element]) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }

    }

    const t = Object.entries(obj).map(item => {
        return item[1];
    });
    return [...new Set(t)].length === 1;
};
// const s = "abacbc";
const s = "aaabb"
console.log(areOccurrencesEqual(s))