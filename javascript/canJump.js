/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const n = nums.length;
    let max = nums[0];
    for (let i = 1; i < n; i++) {
        if (i > max) {
            return false;
        }
        max = Math.max(max, i + nums[i]);
    }
    return true;
};

const nums = [3,2,1,0,4];
// const nums = [2, 3, 1, 1, 4]
console.log(canJump(nums)); // true