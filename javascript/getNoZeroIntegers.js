/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for (let i = 1; i <= n / 2; i++) {
        let t = n - i; 
        if(t.toString().includes('0') || i.toString().includes('0')) {
            continue;
        } else {
            return [i, t];
        }
    }
};

console.log(getNoZeroIntegers(4102))