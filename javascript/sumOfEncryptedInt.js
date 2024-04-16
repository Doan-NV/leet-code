/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let sum = findMax(num);
        total += sum;
    }
    return total;
};

const findMax = (number) => {
    let max = 0;
    let i = 0;
    while (number > 0) {
        i++;
        max = Math.max(max, number % 10);
        number = Math.floor(number / 10);
    }
    let sum = 0;
    for (let j = 0; j < i; j++) {
        sum += max * Math.pow(10, j);
    }
    return sum;
}

console.log(sumOfEncryptedInt([1, 2, 3])); // 6000
console.log(findMax(1982)); // 4