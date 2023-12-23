/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const length = element.toString().length;
        if (length % 2 === 0) {
            count++;
        }
    }
    return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896]))