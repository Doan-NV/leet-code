/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let str = num.toString();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const element = parseInt(str.slice(i, i+k));

       if(element > 0 && str.slice(i, i+k).length === k && num % element === 0) {
        count ++;
       }
    }
    return count;
};

console.log(divisorSubstrings("430043", 2))