/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const length = nums.length;
    const result = [];
    let left = 0, right = length - 1;

    for (let i = length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] * nums[left];
            left++;
        } else {
            result[i] = nums[right] * nums[right];
            right--;
        }
    }

    return result;
};

const nums = [-4,-1,0,3,10];
console.log(sortedSquares(nums)); // [0,1,9,16,100]
