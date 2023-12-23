/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let bit0 = 0;
    let bit1 = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            bit0++
        } else {
            bit1++;
        }

    }
    let max = 0;
    for (let i = 1; i < s.length; i++) {
        const s1 = s.slice(0, i);
        let s1Bit1 = 0;
        for (let j = 0; j < s1.length; j++) {
            if (s1[j] === '1') {
                s1Bit1++;
            }
        }
        let s1bit0 = s1.length - s1Bit1;
        let s2Bit1 = bit1 - s1Bit1;
        max = Math.max(max, s2Bit1 + s1bit0);
    }
    return max;
};

maxScore("1111")