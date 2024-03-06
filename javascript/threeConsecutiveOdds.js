/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        const e1 = arr[i];
        const e2 = arr[i+1];
        const e3 = arr[i+2];
        if(e1 % 2 === 1 && e2 % 2 === 1 && e3 % 2 === 1) {
            return true;
        }
    }
    return false;
};

console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]))