/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (obj[element]) {
            obj[element] += 1;
        } else {
            obj[element] = 1;
        }

    }

    const values = [];
    for (const key in obj) {
        values.push(obj[key]);
    }

    const setArr = [...new Set(values)];
    return values.length === setArr.length;
};

console.log(uniqueOccurrences([1, 2, 3, 1, 2]));