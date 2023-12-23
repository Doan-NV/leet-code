// /**
//  * @param {number[]} arr
//  * @param {number} k
//  * @return {number}
//  */
// var findKthPositive = function(arr, k) {
//     let t = [];
//     for (let i = 0; i < arr[arr.length -1]; i++) {
//         if(!arr.includes(i)) {
//             t.push(i)
//         }
//     }
//     if(t.length <= 1) {
//         return arr[arr.length-1] + k;
//     };
//     if(t.length <=k) {
//         return arr[arr.length-1] + k - t.length + 1;
//     }
//     return t[k];
// };


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    if(arr[0] > k) {
        return k;
    }

    let left = 0;
    let right = arr.length -1;
    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left;
        let target = middle + 1;

        if(arr[middle] - target >= k) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return left + k;
};
// const arr = [2,3,4,7,11], k = 5;
// const arr = [1,2,3,4], k = 2;
const arr = [5,6,7,8,9], k = 9;

console.log(findKthPositive(arr, k))