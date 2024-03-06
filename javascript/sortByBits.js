/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let obj = {};
    const t = arr.sort((a,b) => a-b)
    for (let index = 0; index < t.length; index++) {
        const element = t[index];
        const s = integerToBinary(element);
        if(obj[s]) {
            obj[s].push(element);
        } else {
            obj[s] = [element];
        }
    }
    obj = Object.entries(obj).map(item => item[1]).flat()
    return obj;
};

function integerToBinary(number) {
    const integer = number.toString(2);
    let count = 0;
    for (let index = 0; index < integer.length; index++) {
        const element = integer[index];
        if(element === '1') {
            count ++;
        }
    }

    return count;
}

// const arr = [0,1,2,3,4,5,6,7,8];
const arr = [1024,512,256,128,64,32,16,8,4,2,1]
console.log(sortByBits(arr));