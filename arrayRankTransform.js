/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    const uniqueArr = [...new Set(arr)];
    const sortedArr = uniqueArr.sort((a, b) => {return a > b ? 1 : -1 });

    const objectArr = {};
    sortedArr.forEach((element, index) => {
        objectArr[element] = index+1;
    });

    const transformedArr = arr.map((element) => objectArr[element]);

    return transformedArr;
};

console.log(arrayRankTransform([40, 10, 20, 30]))