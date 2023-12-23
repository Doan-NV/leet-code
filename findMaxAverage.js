/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    
    let sum = 0;
    for (let index = 0; index < k; index++) {
        sum += nums[index];
    }
    let max = sum / k;
    for (let index = k; index < nums.length; index++) {
        sum += nums[index] - nums[index - k];
        max = Math.max(sum / k, max);
    }
    return max.toFixed(5);
};
const nums = [1, 12, -5, -6, 50, 3], k = 4;
// const nums = [-1], k = 1;
console.log(findMaxAverage(nums, k))