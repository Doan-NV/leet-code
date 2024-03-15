/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    let left = 0;
    let right = 0;
    for (let i = 1; i <= n; i++) {
        left = i * (i + 1) / 2;
        right = (i + n) * (n - i + 1) / 2;
        if (left === right) {
            return i
        }
    }
    return -1;
};
// 0,1,2,3,4,5
console.log(pivotInteger(8)); // 6