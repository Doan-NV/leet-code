/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let count = 0;
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if(obj[element]) {
        count +=obj[element];
        obj[element] +=1;
      } else {
        obj[element] = 1;
      }
    }
    return count;
  };
  
  const nums = [1,2,3,1,1,3];
  console.log(numIdenticalPairs(nums));