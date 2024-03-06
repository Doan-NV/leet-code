/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(element === 1) {
            count ++;
            max = Math.max(max, count);
        } else {
            count = 0;
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1,0,1,1,1,1,1,0,0,0,0,1,1,1]));
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
