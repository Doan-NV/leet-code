/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] < target) {
            left = middle + 1;
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
};

var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
       let arr = matrix[i];
       let max = arr[arr.length -1];
       if(max >= target) {
            const t =  search(arr, target);
            if(t !== -1) {
                return true;
            }
       }
    }
    return false;
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;
console.log(searchMatrix(matrix, target));