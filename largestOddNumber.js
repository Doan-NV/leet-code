/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        const element = num[i];
        if (parseInt(element) % 2 === 1) {
            return num.slice(0, i + 1);
        }
    }
    return '';
};
const num = "4206";
// const num = "35427";
// const num = "52";
console.log(largestOddNumber(num))