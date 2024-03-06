/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    let index1 = 0, index2 = 0;
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            count++;
            if (count === 1) {
                index1 = i;
            }

            if (count === 2) {
                index2 = i;
            }
        }
    }

    if (count > 2) {
        return false;
    }

    return s1[index1] === s2[index2] && s1[index2] === s2[index1];
};
const s1 = "bank", s2 = "kanb";

console.log(areAlmostEqual(s1, s2))