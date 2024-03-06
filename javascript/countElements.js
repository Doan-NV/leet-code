/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    // find min and max of nums
    let min = nums[0];
    let max = nums[0];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    // count the number of elements that are lte max and gte min in nums
    for (let i = 0; i <= nums.length; i++) {
       if(nums[i] > min && nums[i] < max) {
           count++;
       }
    }
    return count;

};
const nums = [-71,-71,93,-71,40];
console.log(countElements(nums)); // 2