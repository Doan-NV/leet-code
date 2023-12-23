/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    let obj = {};
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const maxDigit = max(element);
        if (obj[maxDigit]) {
            obj[maxDigit].push(element);
        } else {
            obj[maxDigit] = [element];
        }
    };
    obj = Object.entries(obj).map(item => item[1]).filter(i => i.length >= 2);
    if (obj.length === 0) {
        return -1;
    }

    let maxS = 0;
    for (let index = 0; index < obj.length; index++) {
        const element = obj[index].sort((a,b) => b - a);
        maxS = Math.max(maxS, element[0] + element[1]);
    }
    return maxS;
};

const max = (number) => {
    let max = 0;
    while (number > 0) {
        let t = number % 10;
        max = Math.max(t, max);

        number = Math.floor(number / 10);
    }
    return max;
}
// const nums = [1,2,3,4];
// const nums = [51, 71, 17, 24, 42];
const nums = [84,91,18,59,27,9,81,33,17,58];
console.log(maxSum(nums))