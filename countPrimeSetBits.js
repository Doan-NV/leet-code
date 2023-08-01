const isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let totalPrimeSetBits = 0;
    for (let i = left; i <= right; i++) {
        const binaryNumber =  (i >>> 0).toString(2);
        let count = 0;
        for (let index = 0; index < binaryNumber.length; index++) {
            const element = binaryNumber[index];
            if(element === '1') {
                count ++;
            }
        }
        const isPrimeNumber = isPrime(count);
        if(isPrimeNumber === true) {
            totalPrimeSetBits ++;
        }
    }
    return totalPrimeSetBits;
};


countPrimeSetBits(10, 15)
