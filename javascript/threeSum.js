/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    let i = 1;
    let j = nums.length - 1;
    let set = new Set();
    for (let k = 0; k < nums.length; k++) {
        const target = -nums[k];
        i = k + 1;
        j = nums.length - 1;
        while (i < j) {
            if (nums[i] + nums[j] === target) {
                let t = [nums[k], nums[i], nums[j]];
                if (!set.has(t.toString())) {
                    set.add(t.toString());
                    result.push(t);
                }
                i++;
                j--;
            } else if (nums[i] + nums[j] < target) {
                i++;
            } else {
                j--;
            }
        }
    }
    return result;
};