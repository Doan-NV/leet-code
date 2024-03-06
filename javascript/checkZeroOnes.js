/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
    let count = 0;
    let max1 = 0;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (element === '1') {
            count++;
            max1 = Math.max(max1, count);
        } else {
            count = 0
        }
    }
    let max2 = 0;
    count = 0;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (element === '0') {
            count++;
            max2 = Math.max(max2, count);
        } else {
            count = 0
        }
    }
    console.log('🚀 ~ file: a.js:28 ~ max1:', max1);
    console.log('🚀 ~ file: a.js:28 ~ max2:', max2);
    return max1 > max2;
};

// const s = "1101";
// const s = "111000";
const s = "0111010011";
console.log(checkZeroOnes(s))