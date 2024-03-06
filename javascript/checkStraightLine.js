/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    for (let i = 2; i < coordinates.length; i++) {
        let A = coordinates[i - 2];
        let B = coordinates[i - 1];
        let C = coordinates[i];
        if(((A[0] - B[0]) * (C[1] - B[1])) !== ((A[1] - B[1]) * (C[0] - B[0]))) {
            return false;
        }
    }
    return true;
};

console.log(checkStraightLine([[1,2],[2,3],[3,5]]))