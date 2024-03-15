/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    let product = 1;
    let count0 = 0;
    let countIndex0 = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count0++;
            countIndex0 = i;
            continue;
        }
        product *= nums[i];
    }
    if (count0 > 1) {
        return Array(nums.length).fill(0);
    }
    if (count0 === 1) {
        result = Array(nums.length).fill(0);
        result[countIndex0] = product;
        return result;
    }
    for (let i = 0; i < nums.length; i++) {
        result[i] = product / nums[i];
    }
    return result;

};

const nums = [-1,1,0,-3,3]
// const nums = [1,2,3,4];
// const nums = [0,4,0];

console.log(productExceptSelf(nums));