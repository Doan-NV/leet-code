/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums[i] = -1;
        }
    }
    const map = new Map();
    let sum = 0;
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === 0) {
            maxLength = i + 1;
        }
        if (map.has(sum)) {
            maxLength = Math.max(maxLength, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }
    return maxLength;
};

const totalOfSubArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// const nums = [0, 1, 0, 1];
const nums = [0,1,1]
console.log(findMaxLength(nums)); // 4