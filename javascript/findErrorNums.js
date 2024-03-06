/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length;
    let sum = (n / 2) * (1 + n);
    let arrSum = 0;
    let a = {};
    let c;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(a[element]>=0) {
            c = element;
        }
        a[element] = i;
        arrSum+=element;
        
    }
    return [c, sum - arrSum + c];
};

// console.log(findErrorNums([1,2,2,4,5,6,7,8,9,10]));
console.log(findErrorNums([1,1]));