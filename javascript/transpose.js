/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const t = [];
    for (let i = 0; i < matrix[0].length; i++) {
        const x = [];
        for (let j = 0; j < matrix.length; j++) {
            x.push(matrix[j][i])
        }
        t.push(x);
    }
    return t;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));