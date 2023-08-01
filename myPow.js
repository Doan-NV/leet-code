/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) {
        return 1;
    } else if (n === 1) {
        return x;
    } else if (n < 0) {
        return 1 / myPow(x, -n)
    } else if (n % 2 === 0) {
        let t = n/2;
        console.log('🚀 ~ file: myPow.js:15 ~ myPow ~ t:', t);
        return myPow(x * x, t);
    }
    else {
        return x * myPow(x * x, (n - 1) / 2)
    }
};

console.log(myPow(2.0000, 10))