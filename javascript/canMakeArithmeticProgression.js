/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    const a = arr.sort((a,b) => {
        return b - a;
    });
    for (let i = 0; i < a.length - 2; i++) {
        if(Math.abs(a[i] - a[i+1]) !== Math.abs(a[i+1] - a[i+2])) {
            return false;
        }
        
    }
    return true;
};

const arr = [3,5,1];
console.log(canMakeArithmeticProgression(arr));