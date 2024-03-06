/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let count = 0;
    let first = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(element === 1) {
            first ++;
        }
        if(element !== 1) {
            count ++;
            continue;
        }
        if(count < k && first > 1 && i!==0 ) {
            return false;
        } else if(i!== 0) {
            count = 0;
            first = 1;
        }
    }
    return true;
};
// const nums = [1,0,0,0,1,0,0,1], k = 2;

const nums = [1,0,1], k = 2;

// const nums = [0,1, 0,0,1,0,0,1], k =2;
console.log(kLengthApart(nums, k))