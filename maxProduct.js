/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let i = 1;
    if(nums.length === 2) {
        return (nums[0]-1) * (nums[1] -1 );
    }
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        max1 = Math.max(max1, element);
        if(max1 === element) {
            i = index;
        }
    }
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(element <= max1 && element >= max2 && index !== i) {
            max2 = element;
        }
    }
    return (max1 -1) * (max2 - 1);
};
console.log(maxProduct([1,5,4,5]))
