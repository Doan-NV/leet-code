/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const maxNumber = [];
    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i];
        const minRowObj = findMind(element)
        const arrCol = [];
        for (let j = 0; j < matrix.length; j++) {
            arrCol.push(matrix[j][minRowObj.index]);
        }
        console.log('🚀 ~ file: a.js:14 ~ arrCol:', arrCol);
        const max = Math.max(...arrCol);
        maxNumber.push(max);
        
    }

    const s = Math.min(...maxNumber);
    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i];
        const minRowObj = findMind(element);
        if(s === minRowObj.min) {
            return [s];
        }
    }
    return [];
};

function findMind(array) {
    let min = array[0];
    let index = 0;

    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if(min >  Math.min(min, element)){
            min = element;
            index = i;
        }
    }
    return {min, index};
}
const matrix = [[3,7,8],[9,11,13],[15,16,17]];
// const matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]];
// const matrix = [[3,6],[7,1],[5,2],[4,8]]
console.log(luckyNumbers(matrix));
