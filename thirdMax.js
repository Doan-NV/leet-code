/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    if(nums.length < 3) {
        return max1;
    }
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        max1 = Math.max(max1, element);
    }
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(element < max1 && element > max2) {
            max2 = element;
        }
    }
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(element < max2 && element > max3) {
            max3 = element;
        }
    }
    return max3 === -Infinity ? max1 : max3;
};
console.log("🚀 ~ file: thirdMax.js:13 ~ thirdMax ~ thirdMax:", thirdMax([1,1,2]))
