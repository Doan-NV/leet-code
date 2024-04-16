/**
 * @param {number[]} nums
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] > nums[right]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return nums[left] === target ? left : -1;
};
let nums = [3, 4, 5, 1, 2], target = 3;
console.log(search(nums, target)); // 0

nums = [4, 5, 6, 7, 0, 1, 2], target = 0;
console.log(search(nums, target)); // 4

nums = [4, 5, 6, 7, 0, 1, 2], target = 3;
console.log(search(nums, target)); // -1

nums = [1, 3], target = 3;
console.log(search(nums, target)); // 1

nums = [1, 2, 3, 4, 5, 6], target = 4;
console.log(search(nums, target)); // 3

nums = [11, 13, 15, 17], target = 13;
console.log(search(nums, target)); // 1


nums = [3, 1], target = 1;
console.log(search(nums, target)); // 1
// 0, 4,-1, 1, 3, 1

nums = [5,1,3], target = 5;
console.log(search(nums, target)); // 0