/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            right--;
        }
    }
    return nums[left];
};
const nums = [3, 4, 5, 1, 2];
// const nums = [11, 13, 15, 17];
// const nums = [4,5,6,7,0,1,2]
console.log(findMin(nums)); // 30