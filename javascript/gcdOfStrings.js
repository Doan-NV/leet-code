/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    const s = findGCD(str1.length, str2.length);
    const str = str2.slice(0, s);
    for (let index = 0; index < str1.length; index += s) {
        const element = str1.slice(index, index + s);
        if (element !== str) {
            return ''
        }
    }
    for (let index = 0; index < str2.length; index += s) {
        const element = str2.slice(index, index + s);
        if (element !== str) {
            return ''
        }
    }
    return str;
};

var findGCD = function (a, b) {
    if (b === 0) {
        return a;
    } else {
        return findGCD(b, a % b);
    }
}
// const str1 = "ABCABC", str2 = "ABC";
// const str1 = "LEET", str2 = 'CODE';
const str1 = "AAAAAAAAA", str2 = "AAACCC"
console.log(findGCD(str1.length, str2.length));
console.log(gcdOfStrings(str1, str2));