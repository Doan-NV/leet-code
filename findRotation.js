



/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
    if(areMatricesEqual(matrix, target)) {
        return true;
    }
    let matrix = JSON.parse(JSON.stringify(mat));
    for (let i = 0; i <= mat.length; i++) {
        matrix = rotateMatrix(matrix);
        const isEqual = areMatricesEqual(matrix, target);
        if (isEqual === true) {
            return true;
        }
    }
    return false;
};
// const mat = [[0, 1], [1, 1]], target = [[1, 0], [0, 1]];
// const mat = [[0, 1], [1, 0]], target = [[1, 0], [0, 1]];
const mat =[[1,1],[0,1]], target = [[1,1],[1,0]];
console.log(findRotation(mat, target))

function rotateMatrix(matrix) {
    const n = matrix.length;

    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // Swap matrix[i][j] and matrix[j][i]
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Reverse each row to complete the rotation
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    };
    return matrix;
}

function areMatricesEqual(mat1, mat2) {

    if (mat1.length !== mat2.length) {
        return false; // Matrices have different row counts.
    }
    for (let i = 0; i < mat1.length; i++) {
        if (mat1[i].length !== mat2[i].length) {
            return false; // Rows have different column counts.
        }

        for (let j = 0; j < mat1[i].length; j++) {
            if (mat1[i][j] !== mat2[i][j]) {
                return false; // Elements at the same position are not equal.
            }
        }
    }

    return true; // Matrices are equal.
}

