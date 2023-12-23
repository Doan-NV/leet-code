 
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    if (n === 0) {
        return '0'; // Special case for 0
      }
    
      let base6Number = '';
      while (n > 0) {
        let remainder = n % k;
        base6Number = remainder.toString() + base6Number;
        n = Math.floor(n / k);
      }
      let t = base6Number.split('').reduce((a,b) => {
        return parseInt(a) + parseInt(b);
      });
      return t;
};

console.log(sumBase(34, 6));