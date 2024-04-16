/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stackNumber = [];
    let stackIndex = [];
    let result = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        let top = stackNumber[stackNumber.length - 1];
        while (stackNumber.length && temperatures[i] > top && stackIndex.length) {
            stackNumber.pop();
            let index = stackIndex[stackIndex.length - 1];
            result[index] = i - index;
            stackIndex.pop();
            top = stackNumber[stackNumber.length - 1];
        }
        stackNumber.push(temperatures[i]);
        stackIndex.push(i);
    }
    return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0];
