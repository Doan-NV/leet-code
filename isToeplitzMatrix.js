/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let isToeplitzMatrixCheck = true;
    for (let i = 0; i < matrix.length -1 ; i++) {
        const element = matrix[i];
        for (let j = 0; j < element.length -1; j++) {
            if(matrix[i+1][j+1]) {
                if(matrix[i][j] !== matrix[i+1][j+1]) {
                    isToeplitzMatrixCheck = false;
                }
            }
            
        }
    }
    console.log('🚀 ~ file: isToeplitzMatrix.js:20 ~ isToeplitzMatrix ~ isToeplitzMatrixCheck:', isToeplitzMatrixCheck);
    return isToeplitzMatrixCheck;
};

// isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]])
console.log("=======================");
// isToeplitzMatrix([[1,2],[2,2]])
console.log("==================")
isToeplitzMatrix([[36,86,7,94,71,59,10],[19,0,86,7,94,71,59]])

