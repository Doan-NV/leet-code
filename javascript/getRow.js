/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let t = [];
    for (let j = 0; j <= rowIndex; j++) {
        t.push(pascal(j, rowIndex));
    }
    return t;
};


const pascal = (k, n) => {
    if (k < 0 || k > n) {
        return 0;
    }

    let result = 1;

    for (let i = 1; i <= k; i++) {
        result *= (n - i + 1) / i;
    }

    return Math.round(result);
}

console.log(getRow(3));