/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    const newarr = [nums[0]];
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > newarr[newarr.length - 1]) {
            newarr.push(nums[i]);
        } else if (nums[i] <= newarr[newarr.length - 1]) {
            count++;
            if (count > 1) {
                return false;
            }
            if ((newarr[newarr.length - 2] || 0) < nums[i]) {
                newarr.pop();
                newarr.push(nums[i]);
            }
        }
    }
    return true;
};
// const nums = [1,2,10,5,7];
// const nums = [2,3,1,2];
const nums = [1,1,1];

console.log(canBeIncreasing(nums)); // true