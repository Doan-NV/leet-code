/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0;
    for (let i = 0; i <= s.length - 3; i++) {
        const element = s.slice(i, i+3);
        if(element[0] !== element[1] && element[1] !== element[2] && element[2] !== element[0]) {
            count ++;
        }     
    }
    return count;
};
// const s = "xyzzaz";
const s = "aababcabc";
console.log(countGoodSubstrings(s));