
// sang nguyen to
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            for (let j = 2; i * j < n; j++) {
                isPrime[i * j] = false;
            }
        }
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    
    }
    return count;
};

console.log(countPrimes(10))
