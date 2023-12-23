/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(obj[element] !== 0) {
            return true;
        }
        obj[element/2] = element;
        obj[element*2] = element;
    }
    console.log('🚀 ~ file: index.js:14 ~ checkIfExist ~ obj:', obj);
    return false;
};

console.log(checkIfExist([0,0]))