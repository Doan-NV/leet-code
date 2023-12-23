/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ss = Math.abs(x);
    let t = 0;
    while(ss != 0) {
        let s = ss %10;
        t = t * 10 +s;

        ss = Math.floor(ss / 10)
    }
    return x > 0 ? (t < Math.pow(2, 31) - 1 ? t : 0) : (-t > -Math.pow(2, 31) ? -t : 0)
};


console.log(reverse(-123))