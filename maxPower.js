/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        let t = 1;
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                t++;
            } else {
                break;
            }
        }
        count = Math.max(count, t);
    }
    return count;
};


console.log(maxPower('leeetcode'));