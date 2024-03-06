/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                j = arr2.length;
            } else {
                sum++;
            }
        }
        if (sum === arr2.length) {
            count++
        }
    }
    return count;
};
// const arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2;
// const arr1 = [1, 4, 2, 3], arr2 = [-4, -3, 6, 10, 20, 30], d = 3;
const arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6;
console.log(findTheDistanceValue(arr1, arr2, d))