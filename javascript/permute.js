/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length === 1) {
        return [nums];
    }
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const numsRemain = nums.slice(0, i).concat(nums.slice(i + 1));
        const permutationRemaining = permute(numsRemain);
        for (const arr of permutationRemaining) {
            result.push([element, ...arr]);
        }
    }

    return result;
};

console.log(permute([1,2,3]));