/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    const length = s.length;
\
    let result = [];
    let i = 0;
    while (i < length) {
        if (i + k <= length) {
            result.push(s.slice(i, i + k));
        } else {
            result.push(s.slice(i, i + k) + fill.repeat(i + k - length));
        }
        i += k;
    }
    return result;
};
// const s = "abcdefghil", k = 3, fill = "x";
// console.log(divideString(s, k, fill)); // ["abc", "def", "ghi"]

const s = 'bgycymgbblobvpdf', k = 67, fill = 'z';
console.log(divideString(s, k, fill)); // ["bgycymgbblobvpdf"]
