/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let x1 = x.toString(2).split("");
    let y1 = y.toString(2).split("");
    let length = x1.length > y1.length ? x1.length - y1.length : y1.length - x1.length;
    if (x1.length > y1.length) {
        for (let i = 0; i < length; i++) {
            y1.unshift("0");
        }
    } else if (x1.length < y1.length) {
        for (let i = 0; i < length; i++) {
            x1.unshift("0");
        }
    }
    count = 0;
    for (let i = 0; i < x1.length; i++) {
        if(x1[i]!== y1[i]) {
            count ++;
        }
        
    }
    return count;
};

console.log(hammingDistance(20, 9));
console.log(hammingDistance(3, 1));