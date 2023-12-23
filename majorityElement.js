/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const obj = {};
    for (let index = 0; index < nums.length; index++) {
      const element = nums[index];
      if(obj[element]) {
        obj[element] ++;
      } else {
        obj[element] = 1;
      }
    }
    let t = [];
    const s = nums.length / 3;
    for (const key in obj) {
      if(obj[key] > s) {
        t.push(parseInt(key));
      }
      
    }
    return t;
};
const nums = [3,2,3];

console.log(majorityElement(nums))