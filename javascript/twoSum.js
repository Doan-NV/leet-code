// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//     let a = {};
//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];
//         const s = target - element;
//         if(a[s] >= 0) {
//             return [a[s], i]
//         } else {
//             a[element] = i;
//         }
//     }
//     console.log(a);
// };


// twoSum([2, 11, 7, 15, -6], 9)

twoSum/**
* @param {number[]} numbers
* @param {number} target
* @return {number[]}
*/
var twoSum = function (numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    let t = [];
    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            t.push(i + 1);
            t.push(j + 1);
            break;
        } else if (numbers[i] + numbers[j] < target) {
            i++;
        } else {
            j--;
        }
    }
    return t;
};