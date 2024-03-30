/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        if(hash[nums[i]]) {
            hash[nums[i]]++;
        } else {
            hash[nums[i]] = 1;
        }
    }
    const keys = Object.keys(hash);
    keys.sort((a, b) => hash[b] - hash[a]);
    return keys.slice(0, k).map(Number);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]