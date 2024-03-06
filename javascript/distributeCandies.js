/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const obj = countOccurrences(candyType);
    if(Object.keys(obj).length > candyType.length / 2) {
        return candyType.length /2;
    } else {
        return Object.keys(obj).length;
    }
};

const  countOccurrences = (arr) => {
    const counts = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (counts[element]) {
        counts[element]++;
      } else {
        counts[element] = 1;
      }
    }
  
    return counts;
  }
  
  
  console.log(distributeCandies([1,1,2,3]));
  