/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0, right = arr.length -1;
    console.log('🚀 ~ file: peakIndexInMountainArray.js:7 ~ peakIndexInMountainArray ~ right:', right);
    console.log('🚀 ~ file: peakIndexInMountainArray.js:7 ~ peakIndexInMountainArray ~ left:', left);
    while(left < right) {
        const middle = (right + left) >> 1; // chia 2^1
        console.log('🚀 ~ file: peakIndexInMountainArray.js:9 ~ peakIndexInMountainArray ~ middle:', middle);
        if(arr[middle] < arr[middle +1]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return left;

};

console.log(peakIndexInMountainArray([0,10,4,3,2,1]))