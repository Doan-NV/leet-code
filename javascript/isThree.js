/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if(i === Math.sqrt(n)) {
            count += 1;
        } else if( n % i === 0) {
            count +=2;
        }
    }
    return count === 3;
};
// const n = 2/;
const n = 4;
console.log(isThree(n))