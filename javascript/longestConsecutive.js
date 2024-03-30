/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    console.log(set);
    if (set.size === 0) {
        return 0;
    }
    let max = 1;
    let current = 1;
    for(let number of nums) {
        if (!set.has(number -1)) {
            let currentNumber = number;
            current = 1;
            while(set.has(currentNumber + 1)) {
                current++;
                currentNumber++;
            }
            max = Math.max(max, current);
        }
    }
    return max;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4