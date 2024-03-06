/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let minI = Infinity, minj = Infinity;
    for (let i = start; i < nums.length; i++) {
        if(nums[i] === target) {
            minI = Math.abs(i - start);
            break;
        }
    }

    for (let i = start; i >= 0; i--) {
        if(nums[i] === target) {
            minj = Math.abs(start - i);
            break;
        }
    }
    return Math.min(minj, minI);

};

// const nums = [1,2,3,4,5], target = 5, start = 3;
const nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0
console.log(getMinDistance(nums, target, start));