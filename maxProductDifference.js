/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let min  = nums[0], max = -Infinity;
    let maxIndex=0; minIndex = 0;
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if(max <= element && i != maxIndex) {
        max = element;
        maxIndex = i;
      } 
      if(min >= element && i != minIndex) {
        min = element;
        minIndex = i;
      } 
    }
    let max2 = nums[0], min2 = Infinity;
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if(element <= max && element >= max2 && i !== maxIndex) {
        max2 = element;
      } 
      if( element >= min && element <= min2 && i !== minIndex) {
        min2 = element;
      } 
    }
    return (max2 * max) - (min2 * min);
  };