/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if(j === i) {
                count += mat[i][j];
            }
        }

        for (let j = mat.length - 1; j >= 0; j--) {
            if(mat.length - j - 1  === i) {
                count += mat[j][i];
            }
        }
    }

    if(mat.length % 2 === 0) {
        return count;
    } else {
        return count - mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
    }
};

const mat = [[1,2,3],
[4,5,6],
[7,8,9]];

// const mat = [[1,1,1,1],
// [1,1,1,1],
// [1,1,1,1],
// [1,1,1,1]];
console.log(diagonalSum(mat));