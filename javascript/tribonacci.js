/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 1;
    }

    let prev3 = 0;
    let prev2 = 1;
    let prev1 = 1;
    let current = 0;

    for (let i = 3; i <= n; i++) {
        current = prev3 + prev2 + prev1;
        prev3 = prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return current;
};


console.log(tribonacci(25))