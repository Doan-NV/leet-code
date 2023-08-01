/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = -Infinity;
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        const e = nums[i];
        max = Math.max(max, e);
        if(max === e) {
            index = i;
        }
    }

    let min = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        const e = nums[i];
        if(e < max) {
            min = Math.max(min, e);
        }
    }

    if(max / min >= 2) {
        return index;
    }
    return -1;
};


console.log(dominantIndex([3,6,1,0]))
console.log(dominantIndex([1,2,3,4,6,5]))
console.log(dominantIndex([1,2,3,4]))