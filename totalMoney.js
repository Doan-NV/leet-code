/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let sum = 0;
    if (n <= 7) {
        for (let i = 1; i <= n; i++) {
            sum += i
        }
        return sum;
    }

    if (n % 7 === 0) {
        sum = 28;
        for (let i = 1; i < n / 7; i++) {
            let s = 28 + 7 * i;
            sum = sum + s;
        }
        return sum;
    }
    const t1 = Math.ceil(n / 7);
    const t2 = t1 - 1;
    const a = n % 7;
    sum = 28;
    for (let i = 1; i < t2; i++) {
        let s = 28 + 7 * i;
        sum = sum + s;
    }

    for (let i = 0; i < a; i++) {
        sum = sum + t1 + i;
    }
    return sum;
};

// const n = 4;
// const n = 10;

// const n = 20;
// const n = 26;
const n = 175;
console.log(totalMoney(n));