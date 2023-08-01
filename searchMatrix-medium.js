/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const a =  matrix.flat();
    return a.includes(target);
};

// other solution is using binary search