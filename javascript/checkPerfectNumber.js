/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    let sum = 0;
    for (let i = 1; i*i <= num; i++) {
        if (num % i === 0) {
            sum = sum + i + (num / i);
        }
        if (sum === num*2) {
            return true;
        }
    }
    return false;
    

};
console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
console.log(checkPerfectNumber(2));
console.log(checkPerfectNumber(36));

console.log(checkPerfectNumber(2016));
