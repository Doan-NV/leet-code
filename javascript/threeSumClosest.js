/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let result = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let left = i+1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(target - sum) < Math.abs(target - result)) {
                result = sum;
            }
            if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result
};

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2