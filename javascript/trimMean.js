/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    const length = arr.length;
    const arrSorted = arr.sort((a, b) => {
        return a - b;
    });
    const fivePercents = length * 5 / 100;

    for (let i = 0; i < fivePercents; i++) {

        arrSorted.pop();
        arrSorted.shift();
    }

    const sum = arrSorted.reduce((a, b) => {
        return a + b;
    });
    const agv = sum / (length - 2 * fivePercents);
    return agv.toFixed(5);
};

// const arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3];
// const arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0];
const arr = [6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4];
console.log(trimMean(arr))