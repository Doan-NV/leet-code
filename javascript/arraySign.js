/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    if (nums.includes(0)) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element < 0) {
            count++;
        }
    }

    if (count % 2 === 0) {
        return 1
    }

    return -1;
};
const nums = [-1,-2,-3,-4,3,2,1];
console.log(arraySign(nums))