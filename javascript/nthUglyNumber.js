/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let arrUglyNumber = [1];
    let index2 = 0;
    let index3 = 0;
    let index5 = 0;
    let nextMultiOf2 = 2, nextMultiOf3 = 3, nextMultiOf5 = 5;

    for (let i = 1; i < n; i++) {
        let nextUglyNumber = Math.min(nextMultiOf2, nextMultiOf3, nextMultiOf5);
        arrUglyNumber.push(nextUglyNumber);
        if(nextUglyNumber === nextMultiOf2) {
            index2++;
            nextMultiOf2 = arrUglyNumber[index2] * 2;
        }
        if(nextUglyNumber === nextMultiOf3) {
            index3++;
            nextMultiOf3 = arrUglyNumber[index3] * 3;
        }
        if(nextUglyNumber === nextMultiOf5) {
            index5++;
            nextMultiOf5 = arrUglyNumber[index5] * 5;
        }
    }
    return arrUglyNumber[n - 1]
};

console.log(nthUglyNumber(10)); // 12