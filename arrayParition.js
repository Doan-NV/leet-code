/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const newNums = nums.sort((a, b) => {
    if (a > b) {
      return 1
    }
    if (a < b) {
      return -1;
    }
    return 0;
  })
  let sum = 0;
  for (let i = 0; i < newNums.length; i+=2) {
    const e = newNums[i];
    sum += e;
  }
  return sum;
};

console.log(arrayPairSum([1, 3, 2, 4, 5, 6, 9, 7, 9]));
console.log(arrayPairSum([6,2,6,5,1,2]));