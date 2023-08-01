/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let nums = stones;
    let max1 = -Infinity;
    let max2 = -Infinity;
    let indexMax1 = 0;
    let indexMax2 = 0;
    if (nums.length === 1) {
        return nums[0];
    }


    if (nums.length === 2) {
        return Math.abs(nums[0] - nums[1]);
    }

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        max1 = Math.max(max1, element);
        if (max1 === element) {
            indexMax1 = index;
        }
    }
    nums[indexMax1] = Infinity;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (element <= max1 && element >= max2) {
            max2 = element;
            indexMax2 = index;
        }
    }

    nums[indexMax1] = max1 - max2;

    nums = nums.filter((item, index) => {
        return index !== indexMax2;
    })
    return lastStoneWeight(nums);
};


console.log(lastStoneWeight([2,7,4,1,8,1]))
console.log(lastStoneWeight([2,1]))
console.log(lastStoneWeight([1]))

