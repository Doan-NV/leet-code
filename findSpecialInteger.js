/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    const length = arr.length;
    if(length <= 1) {
        return arr[0];
    }
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (obj[element]) {
            obj[element]++;
            if (obj[element] > length * 25 / 100) {
                return element;
            }
        } else {
            obj[element] = 1;
        }
    }
};