/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    const numsSet = new Set();
    for (const [left, right] of ranges) {
      for (let i = left; i <= right; i++) {
        numsSet.add(i);
      }
    }

    console.log('🚀 ~ file: a.js:19 ~ numsSet:', numsSet);
    for (let i = left; i <= right; i++) {
      if(!numsSet.has(i)) {
        return false;
      }
    }

    return true;
};
const ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5;
console.log(isCovered(ranges, left, right));