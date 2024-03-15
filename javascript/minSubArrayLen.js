/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min = 0;
    let sum = 0;
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= target) {
            if (min === 0) {
                min = i - left + 1;
            } else {
                min = Math.min(min, i - left + 1);
            }
            sum -= nums[left];
            left++;
        }

    }
    return min;
};