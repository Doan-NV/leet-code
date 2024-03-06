/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj = {};
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(obj[element]) {
            obj[element] ++;
        } else {
            obj[element] = 1;
        }
    }
    obj = Object.entries(obj).filter(item => item[1] === 1)
    console.log('🚀 ~ file: a.js:16 ~ obj:', obj);
    if(obj.length === 0) {
        return 0;
    }
    obj = obj.map(item => parseInt(item[1])).reduce((a,b) => a+b);
    return obj;
};
// const nums = [1,1,1,1,1];
// const nums = [1,2,3,2];
const nums = [1,2,3,4,5];
console.log(sumOfUnique(nums));