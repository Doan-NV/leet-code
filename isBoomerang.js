/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
    let A = points[0];
    let B = points[1];
    let C = points[2];

    return ((A[0] - B[0]) * (C[1] - B[1])) !== ((A[1] - B[1]) * (C[0] - B[0]))
};

console.log(isBoomerang([[1,1],[2,2],[3,3]]))
console.log(isBoomerang([[1,1],[2,3],[3,2]]));
console.log(isBoomerang([[1,1],[2,2],[7,7]]))