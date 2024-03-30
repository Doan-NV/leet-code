/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0;
    let i = 0;
    let j = 0;
    let product = 1;
    while (i < nums.length) {
        product *= nums[i];
        while (product >= k && j <= i) {
            product /= nums[j];
            j++;
        }
        count += i - j + 1;
        i++;
    }
    return count;
    
};