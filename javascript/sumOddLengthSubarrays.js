/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j += 2) {
            const t = arr.slice(i, j);
            const sum = t.reduce((a, b) => a + b);
            total += sum;
        }
    }
    return total;
};

const arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr));