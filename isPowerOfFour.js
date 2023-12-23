/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n === 0) {
        return false;
    }

    let x = Math.log(n) / Math.log(4);

    if (0 == x % 1) {
        return n == Math.pow(4, x);
    } else {
        return false
    };
};

// const n = 12;
const n = -2147483648;
console.log(isPowerOfFour(n));
