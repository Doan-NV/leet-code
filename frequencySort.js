/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let obj = {};

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (obj[element]) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    }

    obj = Object.entries(obj).sort((a, b) => {
        if (a[1] - b[1] > 0) {
            return 1
        } else if (a[1] - b[1] < 0) {
            return -1
        } else {
            if (a[0] - b[0] < 0) {
                return 1;
            }
            return -1;
        }
    });
    let arr = [];
    for (let index = 0; index < obj.length; index++) {
        const element = obj[index];
        for (let j = 0; j < element[1]; j++) {
            arr.push(parseInt(element[0]))

        }
    }
    return arr;
};
// const nums = [1,1,2,2,2,3];
// const nums = [2,3,1,3,2];
const nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1];
console.log(frequencySort(nums));