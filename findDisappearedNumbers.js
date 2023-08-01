/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let n = nums.length;
    let obj = {};
    for (let element of nums) {
        if (!obj[element]) {
            obj[element] = 1;
        }
    }
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (!obj[i]) {
            arr.push(i);
        }
    }
    return arr;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
