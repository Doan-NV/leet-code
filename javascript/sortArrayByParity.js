/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let arr = [];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (element % 2 === 0) {
            arr.unshift(element);
        } else {
            arr.push(element);
        }

    }
    return arr;
};

const nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums))