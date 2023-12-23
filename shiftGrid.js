/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    const oneWayArray = [].concat(...grid);
    if(oneWayArray.length === 1) {
        return grid;
    }
    let i = 1;
    let s = oneWayArray;
    console.log('🚀 ~ file: shiftGrid.js:10 ~ shiftGrid ~ oneWayArray:', oneWayArray);
    while(i <= k) {
        s = rotateArr(s);
        i++;
    }
    const lengthOfChildArr = grid[0].length;
    let twoWayArray = [];
    for (let i = 0; i < s.length; i += lengthOfChildArr) {
        twoWayArray.push(s.slice(i, i + lengthOfChildArr));
    }
    return twoWayArray;
};

const rotateArr = function (oneWayArray) {
    let arr = [];
    for (let index = 1; index < oneWayArray.length; index++) {
        arr[0] = oneWayArray[oneWayArray.length-1];
        arr[index] = oneWayArray[index-1];
    }
    return arr;
};
// const grid = [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], k = 4;
const grid = [[1]], k = 10;
console.log(shiftGrid(grid, k));

// [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]