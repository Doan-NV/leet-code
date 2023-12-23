/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const start = findStart(nums, target);
    const end = findEnd(nums, target);
    if (start <= end) {
        return [start, end];
    }
    return [-1, -1];
};

const findStart = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;
    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left;

        if (nums[middle] === target) {
            index = middle;
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return index;
}

const findEnd = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;
    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left;

        if (nums[middle] === target) {
            index = middle;
            left = middle + 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return index;
}

const nums = [5,7,7,8,8,10], target = 8;
console.log(searchRange(nums, target));