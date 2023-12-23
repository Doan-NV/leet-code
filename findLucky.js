/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(obj[element]) {
            obj[element] ++;
        } else {

            obj[element] = 1;
        }
        
    }
    const arrFlat = Object.entries(obj).sort((a, b) => a[1] >= b[1] ? -1 : 1);

    const s = arrFlat.filter(item => {
        return parseInt(item[0]) === item[1];
    })
    if (s.length === 0) {
        return -1;
    } else {
        return s[0][1]
    }

};

console.log(findLucky([1,2,2,3,3,3,10,10,10,10,10,10,10,10,10,10]))