/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length - 1 ; i++) {
        for (let j = i+1; j < nums.length ; j++) {
            const s = i * j;
            if(i * j % k === 0 && nums[i] === nums[j]) {
                count++;
            }
        }
    }
    return count;
};

const nums = [3,1,2,2,2,1,3], k = 2;
console.log(countPairs(nums, k)); // 2